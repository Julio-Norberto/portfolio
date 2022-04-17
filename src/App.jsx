import './App.css';
import Apresentacao from './components/apresentacao/Apresentacao';
import Contato from './components/contato/Contato';
import Projetos from './components/Projetos/Projetos';
import Rodape from './components/rodape/Rodape';
import Sobre from './components/sobre/Sobre';
import Topo from './components/topo/Topo';

function App() {
  return (
    <div className="App">
      
        <Topo />

        <Apresentacao />

        <Sobre />

        <Projetos />

        <Contato />

        <Rodape />

    </div>
  );
}

export default App;
