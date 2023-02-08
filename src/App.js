import React, {useState} from 'react';
import './App.css';
import Titulo from './components/Title/index';

function App() {

  const [valor, setValor] = useState(0);
 
  
  return (
    <div className="container">
      <div className="level">
        <Titulo />
        <h1 className="panel">{valor}</h1>
          <div className='buttons'>
            <button type="button" className="mais" onClick={() => setValor(valor + 1)}>Soma</button>
            <button type="button" className="menos" onClick={() => setValor(valor - 1)}>Subtrai</button>
          </div>
        </div>
    </div>
  );
}

export default App;
