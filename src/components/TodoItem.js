import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const TodoItem = ({todo, index, onChange}) => {
    const {removeTodo} = useContext(Context)
    return (
        <li>
            <span className={todo.completed ? 'done' : ''}>
                <input type="checkbox" checked={todo.completed}
                       onChange={() => onChange(todo.id)}/> <strong>{index + 1}.</strong> {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem