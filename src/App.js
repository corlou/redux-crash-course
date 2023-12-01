import './App.css';
import Todos from './components/ToDo';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <div className="App">
      <AddToDo />
      <Todos />

    </div>
  );
}

export default App;
