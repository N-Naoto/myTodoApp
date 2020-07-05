import React from "react";

const Form = ({ value, setValue, addTodo, id }) => {
  // handleSubmit関数を呼び出すと実行される
  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodoの引数にvalue(入力した文字)を入れる
    addTodo(value, id);
    console.log("送信した！");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Your todo:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default Form;
