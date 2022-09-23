import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5 at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Movies",
      day: "Feb 7 at 8pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Arcade Day",
      day: "Feb 20 at 1:30pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "No task to complete"
      )}
    </div>
  );
}

export default App;
