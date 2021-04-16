import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
function changeText(e){
e.target.classList.add("text");
}

export default function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item" onClick={changeText}>
              <TodoItem {...todo} deleteItem = {props.deleteItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

