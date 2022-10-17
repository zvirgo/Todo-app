import React from 'react'
import { PencilFill, XCircle } from 'react-bootstrap-icons'
import RenameProject from './RenameProject'

const Project = ({ project, edit }) => {
  return (
    <div className='Project'>
      <div className="name">
        {project.name}
      </div>
      <div className="btns">
        {
          edit ?
            <div className="edit-delete">
              <span className="edit">
                <PencilFill size={13} color="" />
              </span>
              <div className="delete">
                <XCircle size={13} color="" />
              </div>
            </div> 
            :
            project.numOfTodos === 0 ? "" :
              <div className="total-todos">
                {project.numOfTodos}
              </div>
        }
      </div>
      {/* <RenameProject /> */}
    </div>
  )
}

export default Project