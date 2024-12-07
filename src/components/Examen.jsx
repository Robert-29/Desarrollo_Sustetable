import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Examen = () => {
  const { matricula, nombre } = useParams();
  const [calificacion, setCalificacion] = useState('');

  const manejarCalificacion = () => {
    // Almacenar la calificación en localStorage
    const examenKey = `${matricula}-${nombre}-examen`;
    localStorage.setItem(examenKey, JSON.stringify({ calificacion }));

    // Resetear el campo
    setCalificacion('');
    alert(`La calificación de ${nombre} ha sido guardada: ${calificacion}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Evaluación de Examen
        </h1>
        <div className="mb-4">
          <p className="text-gray-700 text-lg">
            <strong>Matrícula:</strong> {matricula}
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Nombre:</strong> {nombre}
          </p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Ingresa la calificación:
          </label>
          <input
            type="number"
            value={calificacion}
            onChange={(e) => setCalificacion(e.target.value)}
            placeholder="Ejemplo: 85"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={manejarCalificacion}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Guardar Calificación
        </button>
      </div>
    </div>
  );
};

export default Examen;
