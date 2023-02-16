import { useState } from "react"
import Tasks from "./components/Tasks"
import Header from "./components/Header"
import AddTask from "./components/AddTask"

const App = () => {
  // tasks is waht we call the state
    // setTasks changes the state
    const [showAddTask, setShowAddTasks] = useState (false)
    const [tasks,setTasks] = useState (
      []
  )

  // add Tassk
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {  
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder : !task.reminder} : task )
    )
  }

  return (
    <div className="container">
        <Header onAdd={() => setShowAddTasks(!showAddTask)} showAdd={showAddTask} />
        { showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ( "No Tasks available" ) }
    </div>
  );
}

// using a Class
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
