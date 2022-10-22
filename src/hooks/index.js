import moment from 'moment/moment'
import { useState, useEffect } from 'react'
import firebase from '../firebase'

export function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('todos')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setTodos(data)
            })

        return () => unsubscribe()
    }, [])

    return todos
}
export function useProjects(todos) {
    const [projects, setProjects] = useState([])

    function calculateNumOfTodos(projectName, todos) {
        return todos.filter(todo => todo.projectName === projectName).length
    }

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('projects')
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {

                    const projectName = doc.data().name

                    return {
                        id: doc.id,
                        name: projectName,
                        numOfTodos: calculateNumOfTodos(projectName, todos)
                    }
                })
                setProjects(data)
            })

        return () => unsubscribe()
    }, [])

    return projects
}
export function useFilterTodos(todos, selectedProject) {
    const [filteredTodos, setFilteredTodos] = useState([])
    useEffect(() => {
        let data;
        const todayDateFormated = moment().format('MM/DD/YYYY')
        switch (selectedProject) {
            case 'today':
                data = todos.filter(todo => todo.date === todayDateFormated)
                break;
            case 'next 7 days':
                data = todos.filter(todo => {
                    const todoDate = moment(todo.date, 'MM/DD/YYYY')
                    const diffDays = todoDate.diff(todayDateFormated, 'days')
                    return diffDays >= 0 && diffDays < 7
                })
                break;
            case 'all days':
                data = todos
                break;
            default:
                data = todos.filter(todo => todo.projectName === selectedProject)
                break;
        }
        setFilteredTodos(data)
    }, [todos, selectedProject])
    return filteredTodos
}