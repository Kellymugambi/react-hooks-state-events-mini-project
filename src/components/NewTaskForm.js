import React, { useState } from "react";


function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Food");
  }
  return (
    <div>
      <form className="new-task-form" onSubmit={handleSubmit}>      <label>
        Details
        <input type="text" name="text" />
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      </form>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories
            .filter((category) => category !== "All")
            .map((category) => {
              return <option key={category}>{category}</option>;
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </div>)}
    export default NewTaskForm;