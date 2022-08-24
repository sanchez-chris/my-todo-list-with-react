import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import './TodoList.css'


function TodoList()  {

const [todos, setTodos] = useState([]);

const addTodo = todo => {
    if (todo.text.trim()) {
        todo.text = todo.text.trim();


        const todosUpdated = [todo, ...todos];
        setTodos(todosUpdated);
    }
}

const deleteTodo = id => {
    const todosUpdated = todos.filter(todo => todo.id !== id);
    setTodos(todosUpdated);
}


const completeTodo = id => {
    const todosUpdated = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    setTodos(todosUpdated);
}


    return (
        <>
            <TodoForm onSubmit={addTodo} />
            <div className="todo-list-container">
                {
                    todos.map((todo) =>
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                    />

                    )
                }
            </div>

        </>
    )
}

export default TodoList;