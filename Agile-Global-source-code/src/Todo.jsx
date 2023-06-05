import React, { useState } from "react";

const Task = ({ elem }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <h1>{elem}</h1>
      <button
        className={`${isDone ? "bg-green-300" : "bg-red-300"} p-4`}
        onClick={() => setIsDone(true)}
      >
        DONE
      </button>
    </>
  );
};

const Todo = () => {
  const dataObject = ["abhishek", "saurav", "aman", "aditya"];

  return (
    <div>
      {dataObject?.map((elem) => (
        <Task elem={elem} />
      ))}
    </div>
  );
};

export default Todo;
