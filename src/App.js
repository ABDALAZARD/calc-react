import Titulo from './components/Title'
// import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Titulo />
      <header className="App-header">
        <div className='dashboard'>
          <h1>Dashboard</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
