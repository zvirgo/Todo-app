import React, { useRef, useEffect, useContext } from 'react'
import { TodoContext } from '../context'

const Sidebar = ({ children }) => {
    //Context
    const { setSelectedTodo } = useContext(TodoContext)

    const sidebarRef = useRef()
    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    })

    const handleClick = e => {
        if (e.target === sidebarRef.current || sidebarRef.current.contains(e.target))
            setSelectedTodo(undefined)
    }

    return (
        <div
            className='Sidebar'
            ref={sidebarRef}
        >{children}</div>
    )
}

export default Sidebar