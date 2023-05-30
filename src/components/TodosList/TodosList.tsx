import React, { useEffect } from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { ITodos } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import "./todolist.css"

interface TodosListProps {
    
}

const TodosList:React.FC<TodosListProps> = ({}) => {
    
    
    const [todoValue, setTodoValue] = useState('')
    const [todos, setTodos] = useState<ITodos[]>([])
    
    function addTodo () {
        if(todoValue!== ''){
        setTodos([...todos, {id:todos.length,text:todoValue}])
        setTodoValue('')
        console.log(todos, 'todos')
        }
    }

    function getId (removeId:number) {
        setTodos(todos.filter(todo => 
            todo.id !== removeId
    ))
        
    }

    useEffect(() => {
        const raw = localStorage.getItem("todos")
        if (raw) {
        setTodos(JSON.parse(raw))
        }
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className='todo__container'>
            <Link to={'/'}><span className="less-than">&lt;</span></Link>
            <div className="header__todo">
                <h1 className="todo-title">Введите заметку</h1>
                <input type="text" className="todo-input" value={todoValue} onChange = {e => setTodoValue(e.target.value)} />
                <button className='add-todo' onClick={addTodo}>Добавить</button>
            </div>
            <div className="body__todo">
                {todos.map(todo => (
                    <TodoItem todo = {todo} key = {todo.id} getId = {getId}/>
                ))}
            </div>
        </div>
    )
}
export default TodosList;