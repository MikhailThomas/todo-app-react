import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle }) => {
      return (
    <div>
        {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </div>
  )
}

export default Tasks

// state is immutable you dont use task.push, you recreate it and send it down so its more of an edit you use settasks.