/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
function TodoItemsList({ todoItems, handleOnDelete, setToDoItems }) {
  let [isChecked, setChecked] = useState(false);
  let [editedText, setEditedText] = useState(todoItems.taskName);
  let [editedDate, setEditedDate] = useState(todoItems.dueDate);
  let handleOnChecked = () => {
    let newValueOfCheck = !isChecked;
    setChecked(newValueOfCheck);
  };
  const [isEdited, setEdited] = useState(false);

  const handleEdit = () => {
    isChecked ? setEdited(false) : setEdited(true);
  };

  const handleSave = () => {
    console.log(editedText);
    console.log(editedDate);
    setToDoItems((prevTodoItems) =>
      prevTodoItems.map((item) =>
        item.taskName === todoItems.taskName
          ? { ...item, taskName: editedText, dueDate: editedDate }
          : item
      )
    );
    setEdited(false);
  };

  const handleCancel = () => {
    setEdited(false);
    // Reset editedText and editedDate to original values
    setEditedText(todoItems.taskName);
    setEditedDate(todoItems.dueDate);
  };

  return (
    <>
      <li key={todoItems.taskName} className="to-do-items-list-style">
        <>
          {isEdited ? (
            <div className="onEditDiv">
              <input
                type="text"
                className="editInputField"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <input
                type="date"
                name="3#1234"
                id="editDateBtn"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
              />
              <button onClick={handleSave} className="saveBtn">
                Save
              </button>
              <button className="cancleBtn" onClick={handleCancel}>
                Cancle
              </button>
            </div>
          ) : (
            <>
              <div className="to-do-item-list-style-top-Div">
                <div className="checboxDiv">
                  <input
                    type="checkbox"
                    className="checkbox_input_box"
                    id={todoItems.taskName}
                    onChange={handleOnChecked}
                    checked={isChecked}
                  />
                </div>
                <div>
                  <span
                    className={`${isChecked ? "mainTaskTextWithLine" : ""}`}
                  >
                    {todoItems.taskName}
                  </span>
                </div>
              </div>
              <div className="to-do-item-list-style-bottom-Div">
                <span
                  id="date-box-span"
                  className={`${isChecked ? "mainTaskTextWithLine" : ""}`}
                >
                  {todoItems.dueDate}
                </span>
                <button
                  id="delete-Btn"
                  onClick={() => handleOnDelete(todoItems.taskName)}
                >
                  <AiFillDelete></AiFillDelete>
                </button>
                <button
                  id="edit-button"
                  onClick={handleEdit}
                  className={`${
                    isChecked ? "edit-button-active" : "edit-button"
                  }`}
                >
                  <MdOutlineModeEdit></MdOutlineModeEdit>
                </button>
              </div>
            </>
          )}
        </>
      </li>
    </>
  );
}

export default TodoItemsList;
