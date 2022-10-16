import './App.css';
import Headers from './components/Header'
import Main from './components/Main'
import User from './components/User'
import AddNewTodo from './components/AddNewTodo'
import Calendar from './components/Calendar'
import Projects from './components/Projects'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'

function App() {
  return (
    <div className="App">
      <Headers>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Headers>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
