import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content ,id} = props;
  return ( <>
  <div>{content}</div>
    <button onClick={() => props.deleteItem(id)}>Sil</button>
   </> )
}

export default Todo;
