import Heading from "./componants/heading/Heading";
import InputBox from "./componants/inputBox/InputBox";
import TodoItems from "./componants/TodoItems/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  let [todoItems, setToDoItems] = useState([]);

  let [editTodoItems, setEditTodoItems] = useState([...todoItems]);
  let addNewItems = (taskSet, taskDueDate) => {
    if (taskSet.trim() !== "") {
      let newTodoItems = [
        ...todoItems,
        { taskName: taskSet, dueDate: taskDueDate },
      ];
      setToDoItems(newTodoItems);
    } else {
      alert("please add some task");
    }
  };

  let deleteItems = (itemsNameBtn) => {
    let newItemsAfterDelete = todoItems.filter(
      (item) => item.taskName !== itemsNameBtn
    );
    setToDoItems(newItemsAfterDelete);
  };

  const handleEdit = (updatedTask) => {
    const updatedTasks = editTodoItems.map((task) =>
      task.taskName === updatedTask.taskName ? updatedTask : task
    );
    setEditTodoItems(updatedTasks);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="subMainContainer">
          <Heading></Heading>
          <InputBox handleOnNewItmesAdd={addNewItems}></InputBox>
          <TodoItems
            todoItems={todoItems}
            handleOnDelete={deleteItems}
            onEdit={(updatedTask) => handleEdit(updatedTask)}
            editTodoItems={editTodoItems}
            setToDoItems={setToDoItems}
          ></TodoItems>
        </div>
      </div>
    </>
  );
}

export default App;
