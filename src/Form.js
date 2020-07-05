import React from "react";

const Form = ({ value, setValue, addTodo, id, setTodos }) => {
  // handleSubmit関数を呼び出すと実行される
  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodoの引数にvalue(入力した文字)を入れる
    addTodo(value, id);
    console.log("送信した！");
  };
  const handleAllDelete = () => {
    let YN = window.confirm("本当に全て消していいですか？");
    if (YN) setTodos([]);
  };

  return (
    <>
      <form className="ui input" onSubmit={handleSubmit}>
        <label>やることリスト</label>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
      </form>
      <button className="ui button" onClick={handleAllDelete}>
        全削除
      </button>
    </>
  );
};

export default Form;
