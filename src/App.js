import React, {useState} from 'react';
import './App.css';
import Titulo from './components/Title/index';

function App() {

  const [total, setTotal] = useState(0);
  // const [mais, setMais] = useState(total);
  function setMais(value) {
    return setTotal(total + value);
  }

  function setMenos(value) {
    if(total >= 1) {
      return setTotal( total - value);
    }
  }


  return (
    <div className="container">
      <div className="level">
        <Titulo />
        <h1 className="panel">{total}</h1>
          <div className='buttons'>
            <button type="button" className="mais" onClick={() => setMais(1)}>Soma</button>
            <button type="button" className="menos" onClick={() => setMenos(1)}>Subtrai</button>
          </div>
        </div>
    </div>
  );
}

export default App;
