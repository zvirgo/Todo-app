import React, { useContext, useState, useEffect } from 'react'
import Modal from './Modal'
import TodoForm from './TodoForm';
import { projects } from '../constants'
import { TodoContext } from '../context'


const AddNewTodo = () => {

    // CONTEXT
    const { selectedProject } = useContext(TodoContext)

    // STATE
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoProject, setTodoProject] = useState(selectedProject)

    function handleSubmit(e) {

    }

    useEffect(() => {
        setTodoProject(selectedProject)
    }, [selectedProject])


    return (
        <div className='AddNewTodo'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm
                    handleSubmit={handleSubmit}
                    heading='Add new to do!'
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    todoProject={todoProject}
                    setTodoProject={setTodoProject}
                    projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                />
            </Modal>
        </div>
    )
}

export default AddNewTodo