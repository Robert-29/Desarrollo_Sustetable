import { useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function Ponencia() {
  const [calificacionTotal, setCalificacionTotal] = useState(0);
  const { matricula, nombre } = useParams();

  return (
    <>
      <section className="w-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold">Rúbrica para evaluar Ponencia</h1>
        <p>Actividad 2: Ponencia sobre tema ambiental</p>
        <div className="flex space-x-10">
          <div>
            <article className="flex items-center text-xl">
              <p className="text-xl font-bold">Asignatura: </p>
              <p>Desarrollo sustentable</p>
            </article>
            <article className="flex items-center text-xl">
              <p className="text-xl font-bold">Nombre del profesor: </p>
              <p>Sandra Del Valle Ramírez</p>
            </article>
            <article className="flex items-center text-xl">
              <p className="text-xl font-bold">Nombre del alumno: </p>
              <p>{nombre}</p>
            </article>
            <article className="flex items-center text-xl">
              <p className="text-xl font-bold">Grupo: </p>
              <p>3301</p>
            </article>
          </div>

          <div>
            <article className="flex items-center text-xl">
              <p className="text-xl font-bold">Calificación: </p>
              <p>{calificacionTotal}</p>
            </article>
            <article className="flex items-center text-xl">
              <p className="text-xl font-bold">Fecha: </p>
              <p>06/12/2024</p>
            </article>
            <article className="flex items-center text-xl">
              <p className="text-xl font-bold">Matricula: </p>
              <p>{matricula}</p>
            </article>
          </div>
        </div>
      </section>
      <EvaluationTable setCalificacionTotal={setCalificacionTotal} matricula={matricula} nombre={nombre} />
    </>
  );
}

const EvaluationTable = ({ setCalificacionTotal, matricula, nombre }) => {
  const criterios = [
    {
      id: 1,
      criterio: "Claridad y Definición del Tema",
      descripciones: [
        "Expone claramente el tema de las estrategias de sustentabilidad, definiendo de manera precisa los escenarios modificados y los conceptos clave.",
        "Describe el tema de forma general y adecuada, pero con algunas definiciones incompletas o conceptos ambiguos.",
        "Menciona el tema, pero con definiciones limitadas o confusas y falta de precisión en los conceptos clave.",
        "No define claramente el tema o confunde los conceptos clave relacionados con las estrategias de sustentabilidad.",
      ],
    },
    {
      id: 2,
      criterio: "Identificación de Estrategias Sustentables",
      descripciones: [
        "Identifica de manera exhaustiva diversas estrategias de sustentabilidad adaptadas a diferentes escenarios modificados (cambio climático, urbanización, etc.).",
        "Presenta varias estrategias de sustentabilidad, pero sin un análisis profundo o detalles en algunos casos.",
        "Muestra un conocimiento básico de algunas estrategias, pero sin un análisis detallado o específico para los escenarios.",
        "No identifica o confunde las estrategias de sustentabilidad y su aplicación a escenarios modificados.",
      ],
    },
    {
      id: 3,
      criterio: "Análisis Crítico de Escenarios Modificados",
      descripciones: [
        "Analiza críticamente los escenarios modificados, considerando factores ambientales, sociales y económicos, y cómo afectan la sostenibilidad.",
        "Presenta un análisis adecuado de los escenarios modificados, pero omite algunos factores clave o detalles importantes.",
        "Reconoce algunos escenarios modificados, pero de forma superficial, sin profundizar en los factores clave que afectan la sostenibilidad.",
        "No demuestra comprensión de los escenarios modificados o su impacto en la sostenibilidad.",
      ],
    },
    {
      id: 4,
      criterio: "Uso de Evidencia y Datos",
      descripciones: [
        "Utiliza evidencia sólida y datos actualizados para respaldar las estrategias propuestas, incluyendo estudios de caso, estadísticas y ejemplos relevantes.",
        "Emplea algunos datos y evidencia, pero con limitaciones en la variedad, actualidad o relevancia.",
        "Presenta poca evidencia o datos desactualizados para respaldar las estrategias de sustentabilidad.",
        "No utiliza datos o evidencia relevante que apoye las estrategias propuestas o confunde la información presentada.",
      ],
    },
    {
      id: 5,
      criterio: "Originalidad y Propuesta de Soluciones",
      descripciones: [
        "Propone soluciones innovadoras y viables adaptadas a los escenarios modificados, demostrando creatividad y aplicabilidad práctica.",
        "Presenta soluciones adecuadas, pero con falta de innovación o detalles en su aplicabilidad práctica.",
        "Muestra propuestas generales, pero carece de originalidad o especificidad para los escenarios modificados.",
        "No ofrece soluciones relevantes, innovadoras o viables para los escenarios modificados presentados.",
      ],
    },
    {
      id: 6,
      criterio: "Estructura y Presentación",
      descripciones: [
        "La ponencia está bien organizada, es coherente y sigue un flujo lógico; utiliza elementos visuales y narrativos de manera efectiva para reforzar puntos clave.",
        "La ponencia es clara y coherente, pero podría beneficiarse de una mejor organización o uso de elementos visuales.",
        "La estructura es aceptable, pero presenta algunos problemas de coherencia o falta de elementos visuales efectivos.",
        "La ponencia es desorganizada, confusa y carece de un flujo lógico; no utiliza elementos visuales o narrativos adecuados.",
      ],
    },
    {
      id: 7,
      criterio: "Ortografía",
      descripciones: [
        "Utiliza correctamente las reglas ortográficas gramaticales.",
        "Presenta tres errores ortográficos u omisiones al utilizar las reglas ortográficas gramaticales.",
        "Presenta cinco errores u omisiones al utilizar las reglas ortográficas gramaticales.",
        "No utiliza las reglas ortográficas gramaticales, presenta errores u omisiones incluso en palabras comunes.",
      ],
    },
    {
      id: 8,
      criterio: "Soporte",
      descripciones: [
        "Presenta el trabajo en el soporte indicado en la guía de trabajo.",
        "Presenta el trabajo en el soporte con el 70% de lo indicado en la guía de trabajo.",
        "Presenta el trabajo en el soporte con el 50% de lo indicado en la guía de trabajo.",
        "Presenta el trabajo en un soporte distinto al solicitado.",
      ],
    },
  ];

  const [calificaciones, setCalificaciones] = useState(() =>
    criterios.reduce((acc, item) => {
      acc[item.id] = "";
      return acc;
    }, {})
  );

  const handleChange = (id, value) => {
    const newCalificaciones = { ...calificaciones, [id]: value };
    setCalificaciones(newCalificaciones);

    const sumaTotal = Object.values(newCalificaciones).reduce(
      (total, cal) => total + (parseFloat(cal) || 0),
      0
    );

    const calificacionEscala = (sumaTotal / (criterios.length * 25)) * 100; // Escala basada en los valores máximos
    setCalificacionTotal(calificacionEscala.toFixed(2));

    // Guardar la calificación de la ponencia en localStorage
    const alumnoKey = `${matricula}-${nombre}-ponencia`;
    localStorage.setItem(alumnoKey, JSON.stringify({ calificacion: calificacionEscala.toFixed(2) }));
  };

  return (
    <div className="overflow-x-auto w-full px-10 mt-6">
      <table className="min-w-full border-collapse border border-gray-200 mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Criterios</th>
            <th className="border border-gray-200 px-4 py-2">Excelente <br /> 25</th>
            <th className="border border-gray-200 px-4 py-2">Bueno <br /> 15</th>
            <th className="border border-gray-200 px-4 py-2">Regular <br /> 5</th>
            <th className="border border-gray-200 px-4 py-2">Insuficiente <br /> 0</th>
            <th className="border border-gray-200 px-4 py-2">Calificación</th>
          </tr>
        </thead>
        <tbody>
          {criterios.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2">{item.criterio}</td>
              {item.descripciones.map((desc, index) => (
                <td key={index} className="border border-gray-200 px-4 py-2 text-sm">
                  {desc}
                </td>
              ))}
              <td className="border border-gray-200 px-4 py-2 text-center">
                <input
                  type="number"
                  className="w-20 border border-gray-300 rounded-md px-2 py-1"
                  value={calificaciones[item.id]}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                  min="0"
                  max="15"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

EvaluationTable.propTypes = {
  setCalificacionTotal: PropTypes.func.isRequired,
  matricula: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
};

export default Ponencia;
