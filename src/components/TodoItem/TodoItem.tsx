import React from 'react'
import { ITodos } from '../../types/types';
import "./todoitem.css"

interface TodoItemProps {
    todo: ITodos
    getId: Function
}



const TodoItem:React.FC<TodoItemProps> = ({todo, getId}) => {

    return (
        <div className='todo-item' lang="en">
            <p className='todo-item-text'>{todo.text}</p>
            <button className='todo-remove' onClick={()=>getId(todo.id)}>Выполнено</button>
        </div>
    )
}
export default TodoItem;