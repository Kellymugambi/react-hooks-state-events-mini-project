import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function removeTask(removedTask) {
    setTasks(tasks.filter((task) => task.text !== removedTask));
  }

  const tasksToShow = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={addTask} />
      <TaskList
        onDeleteTask={removeTask}
        tasks={tasksToShow} />
    </div>
  );
}

export default App;