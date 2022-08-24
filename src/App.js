import './App.css';
import Todo from './components/Todo.js'
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList';
 

function App() {
  return (
    <div className="App">
        <div className='to-do-app'>
          <h1>My To-Do-List</h1>
        
          <TodoList />

          

          

        </div>

      
      
    </div>
  );
}

export default App;
