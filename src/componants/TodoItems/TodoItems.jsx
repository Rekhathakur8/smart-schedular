/* eslint-disable react/prop-types */

import TodoItemsList from "./TodoItemsList";
function TodoItems({ todoItems, handleOnDelete, onEdit, setToDoItems }) {
  return (
    <>
      <ul id="ul-style">
        {todoItems.map((items) => (
          // eslint-disable-next-line react/jsx-key
          <TodoItemsList
            handleOnDelete={handleOnDelete}
            onEdit={onEdit}
            todoItems={items}
            setToDoItems={setToDoItems}
          ></TodoItemsList>
        ))}
      </ul>
    </>
  );
}
export default TodoItems;
