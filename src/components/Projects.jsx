import React, { useState } from 'react'
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons'
import { projects } from '../constants'
import AddNewProject from './AddNewProject'
import Project from './Project'

const Projects = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? "#1EC94C" : "#000000"

  return (
    <div className='Projects'>
      <div className="header">
        <div className="title">
          <Palette size="18" />
          <p>Projects</p>
        </div>
        <div className="btns">
          {
            showMenu && projects.length > 0 &&
            <span className='edit' onClick={() => setEdit(edit => !edit)}>
              <PencilFill size="15" color={pencilColor} />
            </span>
          }
          <AddNewProject />
          <div className="arrow">
            <CaretUp size={20} />
          </div>
        </div>
      </div>
      <div className="items">
        {
          projects.map(project =>
            <Project project={project} key={project.id} edit={edit} />
          )
        }
      </div>

    </div>
  )
}

export default Projects