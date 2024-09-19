import { useState } from "react";

import React from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Update the state with the filtered tasks
  };

  return (
    <>
      <div className="bg-yellow-200 min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-lg p-6 rounded-lg border border-black w-96">
          <h2 className="text-center text-2xl font-bold mb-4">Todo List</h2>
          <div className="flex flex-col mb-2">
            <label htmlFor="task" className="text-lg font-semibold mb-2">
              Add a new task:
            </label>
            
            <input
              type="text"
              id="task"
              placeholder="Enter your task"
              onChange={handleChange}
              className="border-2 border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
              onClick={handleClick}
            >
              Add Task
            </button>
          </div>
          <label className="text-xl font-mono ">
                Today's Tasks: 
          </label>
          <div className="mt-2 ">
            {tasks.map((task, index) => (
              <div key={index} className="flex justify-between mt-4">
                <li className="font-medium">
                    {task}
                </li>       
                <button className="bg-red-500 font-semibold w-24 rounded-md" onClick={()=>{deleteTask(index)}}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
