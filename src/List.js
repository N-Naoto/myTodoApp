import React from "react";
import Item from "./Item";

const List = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Item
          id={todo.id}
          key={todo.id}
          content={todo.content}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default List;
