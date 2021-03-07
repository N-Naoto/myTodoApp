import React, { useState } from "react";

const Item = ({ content, deleteTodo, id }) => {
  const [isDone, setIsDone] = useState(false);

  const handleDelete = () => {
    deleteTodo(id);
    console.log("削除");
  };

  return (
    <li>
      <input type="checkbox" onChange={() => {setIsDone(!isDone);}}/>
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>{content}</span>
      <button className="ui icon button orange" onClick={handleDelete}>
        <i className="x icon"></i>
      </button>
    </li>
  );
};

export default Item;
