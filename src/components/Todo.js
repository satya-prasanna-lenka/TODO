import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./todo.css";
import { addTodo, removeTodo, deleteTodo } from "../action02/index";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoreducer.list);
  return (
    <div className="main_todo">
      <div className="container_todo">
        <h2>Add Your List Here🤞</h2>
        <div className="input_todo">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="✍Add Items"
          />
          <button
            className="toto_btn"
            onClick={() => dispatch(addTodo(input), setInput(""))}
          >
            <FaPlus />
          </button>
        </div>
        {list.map((item) => {
          const { id, data } = item;
          return (
            <div className="item_todo" key={id}>
              <p>{data}</p>
              <button
                className="toto_delete"
                onClick={() => dispatch(deleteTodo(id))}
              >
                <FaTrash />
              </button>
            </div>
          );
        })}
        <button className="toto_clear" onClick={() => dispatch(removeTodo(  ))}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Todo;
