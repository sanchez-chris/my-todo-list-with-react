import React from 'react';
import './TodoForm.css';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';


function TodoForm(props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }


    const handleShipment = e => {
        e.preventDefault();
        
        const newTodo = {
            id: uuidv4(),
            text: input,
            completed: false
        
        }

        props.onSubmit(newTodo);
        

    }




    return (
        <form className='todo-form'
            onSubmit={handleShipment}>
            <input
                className='todo-input'
                type='text'
                placeholder='Write a to-do'
                name='text'
                onChange={handleChange}

            />

            <button className='todo-button'>
                Add To-do
            </button>
        </form>
    )
}

export default TodoForm;