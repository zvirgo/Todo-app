import React, { createContext, useState } from 'react'
import { useFilterTodos, useProjects, useTodos, useProjectWithStats } from "../hooks"

const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const [selectedTodo, setSelectedTodo] = useState(undefined)

    const todos = useTodos()
    const projects = useProjects()
    const projectsWithStats = useProjectWithStats(projects, todos)
    const filteredTodos = useFilterTodos(todos, selectedProject)

    return (
        <TodoContext.Provider
            value={{
                defaultProject,
                selectedProject,
                setSelectedProject,
                todos: filteredTodos,
                projects: projectsWithStats,
                selectedTodo,
                setSelectedTodo
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }
