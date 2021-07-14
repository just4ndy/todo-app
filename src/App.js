import React, {useEffect, useState} from 'react'
import TodoList from './components/TodoList'
import Context from './context'

import Loader from './components/Loader'
import AddTodo from './components/AddTodo'

const App = () => {
    const [todos, setTodos] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
            .then(response => response.json())
            .then(todos => [setTodos(todos), setFetching(false)])

    }, [])

    const toggleTodo = id => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed
                return todo
            })
        )
    }

    const addTodo = title => {
        setTodos(todos.concat([{
            id: Date.now(),
            completed: false,
            title
        }]))
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const loaderOrParagraph = () => {
        if (fetching) return <Loader/>
        return <p>No todos</p>
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="container">
                <h1>Todo App</h1>
                <AddTodo onCreate={addTodo}/>
                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : loaderOrParagraph()}
            </div>
        </Context.Provider>
    )
}


export default App
