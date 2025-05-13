import React from "react";
import "../../src/todoList.css";

const TodoList = () => {
  const tasks = [
    { checkListText: "Learn React", checkListStatus: true },
    { checkListText: "Build a single page react App", checkListStatus: false },
    { checkListText: "Complete the Assignment", checkListStatus: false },
  ];

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.checkListStatus ? "checkListStatus" : ""}>
            <input type="checkbox" checked={task.checkListStatus} readOnly />
            {task.checkListText}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;