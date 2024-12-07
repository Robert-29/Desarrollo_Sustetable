import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Alumnos from './pages/Alumnos';
import Ponencia from './components/ponencia/Ponencia';
import Reporte from './components/Reporte';
import Examen from './components/Examen';
import EvaluacionContinua from './components/EvaluacionContinua';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alumnos" element={<Alumnos />} />
        <Route path="/alumno/:matricula/:nombre/examen" element={<Examen />} />
        <Route path="/alumno/:matricula/:nombre/ponencia" element={<Ponencia />} />
        <Route path="/alumno/:matricula/:nombre/reporte" element={<Reporte />} />
        <Route path="/alumno/:matricula/:nombre/evaluacion_continua" element={<EvaluacionContinua />} />
      </Routes>
    </Router>
  );
}

export default App;
