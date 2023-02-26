import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import Cadastro from './Pages/cadastro';
import GraficoDois from './Components/graficodois';
import Barramenu from './Components/barramenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Barramenu />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/grafico" element={<GraficoDois />} />
        <Route path="/barramenu" element={<Barramenu />} />
      </Routes>
    </Router>
  );
}

export default App;
