import moment from 'moment'
import React, { useState, useEffect } from 'react'
import Todo from './Todo'

const Next7Days = ({ todos }) => {

  //State
  const [weekTodos, setWekTodos] = useState([])


  useEffect(() => {
    const days = ["0", "1", "2", "3", "4", "5", "6"]
    const sortTodosByDay = days.map(day => {
      return {
        todos: todos.filter(todo => todo.day === day),
        number: day
      }
    })
    const today = parseInt(moment().format('d'))
    const arrangedDays = sortTodosByDay.slice(today).concat(sortTodosByDay.slice(0, today))

    setWekTodos(arrangedDays)
  }, [todos])


  return (
    <div className='Next7Days'>
      {
        weekTodos.map(day =>
          <div key={day.number}>
            <div className="day">
              <div className="name">
                {moment(day.number, "d").format("dddd")}
                {day.number === moment(day.number, "d") && "(Today)"}
              </div>
              <div className="total-todos">
                ({day.todos.length})
              </div>
            </div>
            <div className="todos">
              {
                day.todos.map(todo =>
                  <Todo key={todo.id} todo={todo} />
                )
              }
            </div>

          </div>
        )
      }
    </div>
  )
}

export default Next7Days