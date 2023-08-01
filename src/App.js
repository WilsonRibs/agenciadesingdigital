import React, {useState} from 'react';

import Topo from './componentes/Topo';
import Banner from './componentes/Banner';
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

import './App.css';

function App() {
  const [modoDark, setModoDark] = useState(false)
     
    const alterarModo = () => {
        setModoDark(!modoDark);
    }
  return (
    <div>
      <Topo alterarModo={alterarModo} modoDark={modoDark}/>
      <Banner modoDark={modoDark} />
      <Conteudo modoDark={modoDark} />
      <Rodape modoDark={modoDark} />
    </div>
  );
}

export default App;
