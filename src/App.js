import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import shortid from "shortid";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const App = () => {
  // Formに入力した値をvalueに入れている
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([
    { content: "風呂にする", id: shortid.generate() },
    { content: "ご飯にする", id: shortid.generate() },
    { content: "課題にする", id: shortid.generate() },
  ]);

  const [id, setId] = useState("初期値");

  // addTodo関数は実行されると項目が増える
  // そしてvalueの値が""になる
  const addTodo = (comment) => {
    if (value.trim() === "") {
      alert("空です");
    } else {
      setTodos([
        ...todos,
        {
          content: comment,
          id: shortid.generate(),
        },
      ]);
      setValue("");
      setId(id);
    }
  };

  //削除ボタンを押すと消える
  const deleteTodo = (id) => {
    // deleteTodoを押すとtodosのidが変更します。
    // todo.idは項目一つ一つのid  idはdeleteTodoの引数
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo App</h1>
      <Form
        value={value}
        addTodo={addTodo}
        setValue={setValue}
        setTodos={setTodos}
      />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
