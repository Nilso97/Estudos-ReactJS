import { useState } from 'react';

import Nome from './components/Nome';
import Saudacao from './components/Saudacao';
import './App.css';

function App() {
  const [nome, setNome] = useState();
  return (
    <div className="App">
      <h1>State Lift</h1>
      <Nome setNome={setNome} />
      <div>
        <Saudacao nome={nome} />
      </div>
    </div>
  );
}

export default App;
