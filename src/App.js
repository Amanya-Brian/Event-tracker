// import logo from './logo.svg';
import { useState } from 'react'
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState( false )
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor\'s appointment',
            day: '25th Feb',
            time: '2.00pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Football tournament',
            day: '16th Jun',
            time: '9.00am',
            reminder: true,
        },
        {
            id: 3,
            text: 'Visit dentist',
            day: '19th Mar',
            time: '3.00pm',
            reminder: true,
        },
        {
            id: 4,
            text: 'Food shopping',
            day: '3rd May',
            time: '5.00pm',
            reminder: false,
          },
      ]
  )

  // Add Task
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task}
    setTasks([ ...tasks, newTask ])
  }

  //Delete Task
  const deleteTask = (id) => {
    // console.log('Delete', id)
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  //Toggle Remider
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }
      
  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks today')}
    </div>
  );
}

export default App;
