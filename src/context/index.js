import React, { createContext, useState } from 'react'
import { useFilterTodos, useProjects, useTodos } from "../hooks"

const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)

    const todos = useTodos()
    const projects = useProjects(todos)
    const filteredTodos = useFilterTodos(todos, selectedProject)

    return (
        <TodoContext.Provider
            value={{
                defaultProject,
                selectedProject,
                setSelectedProject,
                todos: filteredTodos,
                projects
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }
