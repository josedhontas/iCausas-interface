import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import GraficoDois from './Components/graficodois';
import Barramenu from './Pages/barramenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Barramenu />} />
        <Route path="/" element={<GraficoDois />} />
        <Route path="/barramenu" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
