import React, { useState } from 'react'
import Modal from './Modal'
import TodoForm from './TodoForm';
import {projects} from '../constants'


const AddNewTodo = () => {
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    function handleSubmit(e){

    }
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
                    heading="Add new to do!"
                    text={text}
                    setText={setText}
                    day={day} setDay={setDay}
                    time={time}
                    setTime={setTime}
                    projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                />
            </Modal>
        </div>
    )
}

export default AddNewTodo