import { useState } from "react";

export const CreateTodo = ({refresh, setRefresh}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const clickHandler = async () => {
    await fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    setRefresh(!refresh)
    console.log("Todo created successfully");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></input>
      <br></br>
      <button onClick={clickHandler}>Add Todo</button>
    </div>
  );
};
