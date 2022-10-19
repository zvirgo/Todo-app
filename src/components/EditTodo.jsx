import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { projects } from '../constants'

const EditTodo = () => {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState('')
  const [day, setDay] = useState(new Date())
  const [time, setTime] = useState(new Date())
  function handleSubmit(e){

  }
  return (
    <div className='EditTodo'>
      <div className="header">
        Edit Todo
      </div>
      <div className="container">
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day} setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  )
}

export default EditTodo