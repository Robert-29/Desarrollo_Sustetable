import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const navigate = useNavigate();
  const [calificacionesPonencia, setCalificacionesPonencia] = useState({});
  const [calificacionesReporte, setCalificacionesReporte] = useState({});
  const [calificacionesExamen, setCalificacionesExamen] = useState({});

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/alumnos');
        setAlumnos(response.data);

        // Recuperar las calificaciones de cada alumno desde localStorage
        const newCalificacionesPonencia = {};
        const newCalificacionesReporte = {};
        const newCalificacionesExamen = {};
        response.data.forEach(alumno => {
          const alumnoKeyPonencia = `${alumno.matricula}-${alumno.nombre}-ponencia`;
          const calificacionPonencia = localStorage.getItem(alumnoKeyPonencia);
          newCalificacionesPonencia[alumno.matricula] = calificacionPonencia ? JSON.parse(calificacionPonencia).calificacion : 0;

          const alumnoKeyReporte = `${alumno.matricula}-${alumno.nombre}-reporte`;
          const calificacionReporte = localStorage.getItem(alumnoKeyReporte);
          newCalificacionesReporte[alumno.matricula] = calificacionReporte ? JSON.parse(calificacionReporte).calificacion : 0;

          // Recuperar calificación del examen
          const alumnoKeyExamen = `${alumno.matricula}-${alumno.nombre}-examen`;
          const calificacionExamen = localStorage.getItem(alumnoKeyExamen);
          newCalificacionesExamen[alumno.matricula] = calificacionExamen ? JSON.parse(calificacionExamen).calificacion : 0;
        });

        setCalificacionesPonencia(newCalificacionesPonencia);
        setCalificacionesReporte(newCalificacionesReporte);
        setCalificacionesExamen(newCalificacionesExamen);
      } catch (error) {
        console.error('Error al obtener los alumnos:', error);
      }
    };

    fetchAlumnos();
  }, []);

  const handleNavigate = (matricula, nombre, evaluacion) => {
    navigate(`/alumno/${matricula}/${nombre}/${evaluacion}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tema 5. Evaluación</h1>
      <div className="overflow-x-auto flex justify-center">
        <table className="bg-white w-[90%] shadow-md rounded-lg">
          <thead>
            <tr className="bg-primario text-white text-left">
              <th className="px-4 py-2">Matrícula</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Evaluaciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr
                key={alumno.matricula}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}
              >
                <td className="text-xl px-4 py-2 border">{alumno.matricula}</td>
                <td className="text-xl px-4 py-2 border">{alumno.nombre}</td>
                <td className="px-4 py-2 border flex justify-center">
                  <div className="flex space-x-2">
                    <div>
                      <button
                        onClick={() => handleNavigate(alumno.matricula, alumno.nombre, 'evaluacion_continua')}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                      >
                        Evaluación Continua
                      </button>
                      <p className='text-center font-bold'>0</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleNavigate(alumno.matricula, alumno.nombre, 'reporte')}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                      >
                        Reporte
                      </button>
                      <p className='text-center font-bold'>{calificacionesReporte[alumno.matricula] || '0'}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleNavigate(alumno.matricula, alumno.nombre, 'ponencia')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                      >
                        Ponencia
                      </button>
                      <p className='text-center font-bold'>{calificacionesPonencia[alumno.matricula] || '0'}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleNavigate(alumno.matricula, alumno.nombre, 'examen')}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                      >
                        Examen
                      </button>
                      <p className='text-center font-bold'>{calificacionesExamen[alumno.matricula] || '0'}</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alumnos;
