import React,{useState, useEffect, useReducer} from "react"

const initialState = []

 function reducer(state, action){
    switch(action.type){
        case 'ADD_TASKS':
            return [...state,{id:Date.now(), text:action.payload, completed:false}]
        case 'DELETE_TASKS':
            return state.filter(task  => task.id !== action.payload)
        case 'TOGGLE_TASKS':
            return state.map(task =>
                task.id === action.payload ? {...task,  completed: !task.completed} : task
            )
        default:
            return state
        }
}

export const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [task, setTask] = useState('')

    const handleAddTask = () => {
        if (task.trim()){ 
        dispatch({type:'ADD_TASKS', payload:task})
        setTask(" ")
        }
    }

    return(
        <div>
        <h1>To do List</h1>
        <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new Task"        
        />
        <button onClick={handleAddTask}>Add task!</button>
        <ul>
        {state.map((task) => ( 
        <li key={task.id}>
            <span 
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
            onClick={() => dispatch({ type: 'TOGGLE_TASKS', payload: task.id })}
            >{task.text}
            </span>
            <button onClick={() => dispatch({type:'DELETE_TASKS', payload:task.id})}>
                Delete
            </button>
        </li>       
        ))}
        </ul>
        </div>
    )
}