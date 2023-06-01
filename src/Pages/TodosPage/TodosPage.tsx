import React from 'react'
import TodosList from '../../components/TodosList/TodosList';

interface TodosProps {
    
}

const TodosPage:React.FC<TodosProps> = ({}) => {
    
    return (
        <div>
            <TodosList></TodosList>
        </div>
    )
}
export default TodosPage;