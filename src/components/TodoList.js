import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


const TodoList = ({todos, onToggle}) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} index={index} onChange={onToggle}/>
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList