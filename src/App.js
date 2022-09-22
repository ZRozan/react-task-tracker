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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
