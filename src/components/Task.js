import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ' ' }`} onDoubleClick={() => onToggle(task.id)}>
            <h2>{task.text} 
            <FaTimes style={ {color: 'red', cursor: 'pointer' } }
            onClick = {() => onDelete(task.id)}

            
            /></h2>
            <h5>{task.day}</h5>
            <p>{task.time}</p>
        </div>
    )
}

export default Task
