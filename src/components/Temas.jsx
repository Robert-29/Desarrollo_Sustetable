import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function Temas() {
    const navigate = useNavigate();

    const ventanaError = () => {
        Swal.fire({
            title: "No disponible",
            icon: "error",
            confirmButtonText: "Cerrar",
        });
    } 

    const activarVentana = () => {
        Swal.fire({
            title: "Tema 1. Subtemas",
            html: `
            <p>1.1 Concepto de sustentabilidad. </p>
            <p>1.2 Principios de la sustentabilidad. </p>
            <p>1.3 Dimensiones de la sustentabilidad.</p>
            `,
            icon: "info",
            confirmButtonText: "Cerrar",
        });
    }  

    const activarVentanaTema2 = () => {
        Swal.fire({
        title: "Tema 2. Subtemas",
        html: `
            <ul>
            <li>2.1 El ecosistema</li>
            <li>2.2 Flujo de energía</li>
            <li>2.3 Biósfera</li>
            <li>2.3.1 Hidrósfera</li>
            <li>2.3.2 Litósfera</li>
            <li>2.3.3 Atmósfera</li>
            <li>2.3.4 Ciclos biogeoquímicos (C, H, O, N, P)</li>
            <li>2.3.5 Biodiversidad</li>
            <li>2.4 Estrategias de sustentabilidad para el manejo de recursos naturales</li>
            <li>2.4.1 Servicios ambientales</li>
            <li>2.4.2 Programas sectoriales</li>
            <li>2.4.3 Derecho, Legislación y normatividad ambiental</li>
            <li>2.4.4 Ordenamiento ecológico territorial</li>
            </ul>
        `,
        icon: "info",
        confirmButtonText: "Cerrar",
        });
    };

    const activarVentanaTema3 = () => {
        Swal.fire({
        title: "Tema 3. Subtemas",
        html: `
            <ul>
            <li>3.1 Sociedad, organización social</li>
            <li>3.2 Cultura, diversidad socio-cultural</li>
            <li>3.2.1 Desarrollo humano</li>
            <li>3.2.2 Índice de desarrollo humano</li>
            <li>3.2.3 Índice de desarrollo social</li>
            <li>3.2.4 Desarrollo urbano y rural</li>
            <li>3.3 Impacto de actividades humanas sobre la naturaleza</li>
            <li>3.3.1 Fenómenos poblacionales: desertificación, migración</li>
            <li>3.4 Cambio climático global: causas y consecuencias</li>
            <li>3.5 Estilos de vida y consumo</li>
            <li>3.6 Estrategias de sustentabilidad para el escenario socio-cultural</li>
            <li>3.6.1 Carta de la tierra</li>
            <li>3.6.2 Agenda 21</li>
            <li>3.6.3 Política ambiental</li>
            </ul>
        `,
        icon: "info",
        confirmButtonText: "Cerrar",
        });
    };

    const activarVentanaTema4 = () => {
        Swal.fire({
        title: "Tema 4. Subtemas",
        html: `
            <ul>
            <li>4.1 Economía y diversidad económica</li>
            <li>4.2 Sistemas de producción (oferta y demanda)</li>
            <li>4.3 Economía global vs economía local</li>
            <li>4.4 Producto interno bruto (PIB), distribución del PIB</li>
            <li>4.5 Externalización e internalización de costos</li>
            <li>4.6 Obsolescencia planificada y percibida</li>
            <li>4.7 Valoración económica de servicios ambientales</li>
            <li>4.8 Estrategias de sustentabilidad para el escenario económico</li>
            <li>4.8.1 Análisis del ciclo de vida: Huella ecológica</li>
            <li>4.8.2 Empresas socialmente responsables</li>
            <li>4.8.3 Oportunidades de desarrollo regional</li>
            </ul>
        `,
        icon: "info",
        confirmButtonText: "Cerrar",
        });
    };

    const activarVentanaTema5 = () => {
        Swal.fire({
        title: "Tema 5. Subtemas",
        html: `
            <ul>
            <li>5.1 Crecimiento demográfico, industrialización, uso de la energía</li>
            <li>5.1.1 Fenómenos naturales</li>
            <li>5.2 El Estado como regulador del desarrollo</li>
            <li>5.2.1 Constitución política de los Estados Unidos Mexicanos</li>
            <li>5.3 Inseguridad alimentaria, social, política, jurídica, económica</li>
            <li>5.4 Distribución de la riqueza</li>
            <li>5.5 Estrategias de sustentabilidad para los escenarios modificados</li>
            <li>5.5.1 Producción más limpia</li>
            <li>5.5.2 Procesos ecoeficientes</li>
            <li>5.5.3 Planes de Desarrollo Nacional Estatal y Municipal</li>
            </ul>
        `,
        icon: "info",
        confirmButtonText: "Cerrar",
        });
    };
    

  return (
    <>
    <section className="flex items-center justify-center gap-4 p-6 bg-gray-100 mb-10">
      {/* Imagen 1 */}
      <div className="relative w-96 h-80 group">
        <img
          src="../../public/img/descarga.jpg"
          alt="Primera imagen"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        />
        <h2 className='font-poppins font-bold text-xl text-center text-green-800' >Tema 1: Introducción al Desarrollo Sustentable</h2>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition">
          <button className="font-bold px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition mb-2" onClick={activarVentana} >
            Subtemas
          </button>
          <button className="font-bold px-4 py-2 bg-orange-300 rounded-md hover:bg-orange-400 transition" onClick={ventanaError} >
            Evaluación
          </button>
        </div>
      </div>

      {/* Imagen 2 */}
      <div className="relative w-96 h-80 group">
        <img
          src="../../public/img/segunda.jpg"
          alt="Segunda imagen"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        />
        <h2 className='font-poppins font-bold text-xl text-center text-green-800' >Tema 2: Escenario natural </h2>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition">
          <button className="font-bold px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition mb-2" onClick={activarVentanaTema2} >
            Subtemas
          </button>
          <button className="font-bold px-4 py-2 bg-orange-300 rounded-md hover:bg-orange-400 transition" onClick={ventanaError} >
            Evaluación
          </button>
        </div>
      </div>

      {/* Imagen 3 */}
      <div className="relative w-96 h-80 group">
        <img
          src="../../public/img/tercera.jpg"
          alt="Tercera imagen"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        />
        <h2 className='font-poppins font-bold text-xl text-center text-green-800' >Tema 3: Escenario socio-cultural </h2>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition">
          <button className="font-bold px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition mb-2" onClick={activarVentanaTema3}>
            Subtemas
          </button>
          <button className="font-bold px-4 py-2 bg-orange-300 rounded-md hover:bg-orange-400 transition" onClick={ventanaError} >
            Evaluación
          </button>
        </div>
      </div>
    </section>

    <section className="flex items-center justify-center gap-4 p-6 bg-gray-100 mb-10">
      {/* Imagen 4 */}
      <div className="relative w-96 h-80 group">
        <img
          src="../../public/img/cuarta.jpg"
          alt="Primera imagen"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        />
        <h2 className='font-poppins font-bold text-xl text-center text-green-800' >Tema 4: Escenario económico </h2>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition">
          <button className="font-bold px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition mb-2"onClick={activarVentanaTema4} >
            Subtemas
          </button>
          <button className="font-bold px-4 py-2 bg-orange-300 rounded-md hover:bg-orange-400 transition" onClick={ventanaError} >
            Evaluación
          </button>
        </div>
      </div>

      {/* Imagen 5 */}
      <div className="relative w-96 h-80 group">
        <img
          src="../../public/img/quinta.jpg"
          alt="Segunda imagen"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        />
        <h2 className='font-poppins font-bold text-xl text-center text-green-800' >Tema 5: Escenario modificado</h2>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4 opacity-0 group-hover:opacity-100 transition">
          <button className="font-bold px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition mb-2" onClick={activarVentanaTema5} >
            Subtemas
          </button>
          <button className="font-bold px-4 py-2 bg-orange-300 rounded-md hover:bg-orange-400 transition" onClick={() => navigate("/Alumnos")} >
            Evaluación
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Temas;
