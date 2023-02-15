import { useState } from "react"
import Tasks from "./components/Tasks"
import Header from "./components/Header"

const App = () => {
  // tasks is waht we call the state
    // setTasks changes the state
    const [tasks,setTasks] = useState (
      [
          {
              id: 1,
              text: "lets get food baba",
              day: "Feb 5th at 2:30pm",
              reminder: false,
          },
          {
              id: 2,
              text: "lets get drinks baba",
              day: "Feb 5th at 2:30pm",
              reminder: false,
          },
          {
              id: 3,
              text: "lets get poker baba",
              day: "Feb 5th at 2:30pm",
              reminder: false,
          }
      ]
  )


  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks} />
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
