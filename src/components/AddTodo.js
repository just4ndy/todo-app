import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({onCreate}) => {
    const [todo, setTodo] = useState('')
    const submitHandler = e => {
        e.preventDefault()
        if (todo.trim()) {
            onCreate(todo)
            setTodo('')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <input value={todo} onChange={e => setTodo(e.target.value)} type="text"/>
            <button>Add todo</button>
        </form>
    )

}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo