import { useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function Reporte() {
  const [calificacionTotal, setCalificacionTotal] = useState(0);
  const { matricula, nombre } = useParams();

  return (
    <>
      <section className="w-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold">Rúbrica para evaluar Reporte</h1>
        <p>Tema 5 (actividad 1) Elaboración de un reporte</p>
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
      criterio: "Comprensión de los Recursos Naturales",
      descripciones: [
        "Identifica de manera exhaustiva los recursos naturales de México (minerales, agua, biodiversidad, etc.) y su distribución geográfica.",
        "Reconoce los principales recursos naturales y su distribución, pero con detalles limitados en algunas áreas.",
        "Menciona algunos recursos naturales, pero sin suficiente detalle o comprensión geográfica.",
        "No identifica los recursos naturales de México o muestra confusión en su distribución geográfica.",
      ],
    },
    {
      id: 2,
      criterio: "Conocimiento del Capital Humano y Cultural",
      descripciones: [
        "Demuestra un conocimiento profundo del capital humano (educación, habilidades) y riqueza cultural (patrimonio, diversidad étnica) en México.",
        "Explica adecuadamente el capital humano y cultural, con algunas omisiones menores en detalles o ejemplos.",
        "Muestra un conocimiento básico del capital humano y cultural, pero falta profundidad o ejemplos claros.",
        "No muestra comprensión del capital humano y la riqueza cultural de México.",
      ],
    },
    {
      id: 3,
      criterio: "Análisis del Capital Económico",
      descripciones: [
        "Analiza de forma crítica los componentes del capital económico en México (infraestructura, inversiones, sectores productivos clave).",
        "Presenta un análisis adecuado del capital económico, pero con falta de profundidad en algunos aspectos.",
        "Reconoce componentes del capital económico, pero de manera superficial y con detalles limitados.",
        "No demuestra comprensión de los componentes del capital económico en México.",
      ],
    },
    {
      id: 4,
      criterio: "Evaluación de la Distribución de la Riqueza",
      descripciones: [
        "Evalúa claramente la distribución de la riqueza en México, considerando factores económicos, sociales, y regionales, e identifica desigualdades.",
        "Describe la distribución de la riqueza en términos generales, pero sin profundidad en algunos factores.",
        "Menciona la distribución de la riqueza de manera limitada, sin un análisis claro de los factores de desigualdad.",
        "No aborda o comprende la distribución de la riqueza o los factores de desigualdad en México.",
      ],
    },
    {
      id: 5,
      criterio: "Impacto de Políticas y Programas Gubernamentales",
      descripciones: [
        "Explica con claridad el impacto de las políticas y programas gubernamentales en la generación y distribución de la riqueza en México.",
        "Describe el impacto de algunas políticas y programas, pero con ejemplos específicos o análisis detallado limitado.",
        "Menciona algunas políticas y programas, pero sin detalle o profundidad sobre su impacto.",
        "No demuestra conocimiento sobre las políticas y programas que afectan la riqueza en México.",
      ],
    },
    {
      id: 6,
      criterio: "Ortografía",
      descripciones: [
        "Utiliza correctamente las reglas ortográficas gramaticales.",
        "Presenta tres errores ortográficos u omisiones al utilizar las reglas ortográficas gramaticales.",
        "Presenta cinco errores u omisiones al utilizar las reglas ortográficas gramaticales.",
        "No utiliza las reglas ortográficas gramaticales, presenta errores u omisiones incluso en palabras comunes.",
      ],
    },
    {
      id: 7,
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

    const calificacionEscala = (sumaTotal / (criterios.length * 15)) * 100; // Escala basada en los valores máximos
    setCalificacionTotal(calificacionEscala.toFixed(2));

    // Guardar la calificación en localStorage para "reporte"
    const alumnoKey = `${matricula}-${nombre}-reporte`;
    localStorage.setItem(alumnoKey, JSON.stringify({ calificacion: calificacionEscala.toFixed(2) }));
  };

  return (
    <div className="overflow-x-auto w-full px-10 mt-6">
      <table className="min-w-full border-collapse border border-gray-200 mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Criterios</th>
            <th className="border border-gray-200 px-4 py-2">Excelente <br /> 15</th>
            <th className="border border-gray-200 px-4 py-2">Bueno <br /> 10</th>
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

export default Reporte;
