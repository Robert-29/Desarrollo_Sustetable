import { useState } from "react";
import { useParams } from 'react-router-dom';

function EvaluacionContinua() {
  const [calificacionTotal, setCalificacionTotal] = useState(0);
  const { matricula, nombre } = useParams();

  return (
    <>
      <section className="w-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center">Lista de cotejo para evaluar actividades <br /> Asignatura: Desarrollo sustentable <br /> Tema 5. Escenario modificado</h1>
        <p>Competencia especifica: </p>
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
              <p>{calificacionTotal}</p> {/* Mostrar la calificación calculada */}
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
        <p>Instrucciones para el evaluador: Tome el trabajo que presenta el estudiantes. Verifique que los datos generales <br /> 
          de la lista de cotejo en la lista superiror este completamente llena por el estudiant. Revise que contenga los criterios en la <br />
          suguiente tabla, anote la nota en la columna cuando contenga la actividad en caso contrario ponga una palomita <br />
          en No en la columna de val se escribirá la valoracón de cada reactivo, en la columna de observación conjunte aquellos <br />
          comentarios y su recomedación de cuando presentar las mejoras de trabajo, si se trata de la primera oportunidad en caso <br />
          coloque los comentarios para la mejora de trabajos futuros en esta u otra asignatura.
        </p>
      </section>
      <EvaluationTable setCalificacionTotal={setCalificacionTotal} />
    </>
  );
}

const EvaluationTable = ({ setCalificacionTotal }) => {
  const criterios = [
    {
      id: 1,
      criterio: "Entrega en tiempo y forma en la fecha que se estipulo",
      descripciones: [
        "2",
      ],
    },
    {
      id: 2,
      criterio: "cumple con los objetivos de la actividad",
      descripciones: [
        "2",
      ],
    },
    {
      id: 3,
      criterio: "Participa activamente durante la actividad",
      descripciones: [
        "1",
      ],
    },
    {
      id: 4,
      criterio: "Utiliza correctamente los conceptos enseñados",
      descripciones: [
        "2",
      ],
    },
    {
      id: 5,
      criterio: "colabora con sus comapñeros de manera efectiva",
      descripciones: [
        "2",
      ],
    },
    {
      id: 6,
      criterio: "Sigue las instrucciones dadas por el docente",
      descripciones: [
        "2",
      ],
    },
    {
      id: 7,
      criterio: "Demuestra comprensión del contenido",
      descripciones: [
        "2",
      ],
    },
    {
      id: 8,
      criterio: "Presenta el trabajo de manera clara y organizada",
      descripciones: [
        "2",
      ],
    },
    {
      id: 9,
      criterio: "Hace uso adecuado del tiempo disponible",
      descripciones: [
        "1",
      ],
    },
    {
      id: 10,
      criterio: "Hace preguntas pertinentes y relevantes",
      descripciones: [
        "2",
      ],
    },
    {
      id: 11,
      criterio: "Refleja esfuerzo y dedicación en la actividad.",
      descripciones: [
        "2",
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
  };

  return (
    <div className="overflow-x-auto w-full px-10 mt-6">
      <table className="min-w-full border-collapse border border-gray-200 mb-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">Criterios</th>
            <th className="border border-gray-200 px-4 py-2">IND</th>
            <th className="border border-gray-200 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {criterios.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2">{item.criterio}</td>
              {item.descripciones.map((desc, index) => (
                <td key={index} className="border border-gray-200 px-4 py-2 text-center">
                  {desc}
                </td>
              ))}
              <td className="border border-gray-200 px-4 py-2 text-center">
                <input
                  type="number"
                  className="w-20 border border-gray-300 rounded-md px-2 py-1 text-center"
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

export default EvaluacionContinua;
