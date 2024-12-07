import Temas from '../components/Temas'
import Planeta from '../components/Planeta'
import Swal from "sweetalert2";

function Home() {

    const activarVentana = () => {
        Swal.fire({
            title: "Dato curioso",
            html: `
                <p>
¿Sabías que durante el semestre utilizamos aproximadamente 176 hojas al realizar actividades relacionadas con el desarrollo sustentable? Gracias a la digitalización de las actividades en el Tema 5, hemos logrado reducir significativamente el consumo de papel, contribuyendo a ser más responsables y amigables con el medio ambiente. <br/> 🌱✨ </p>
            `,
            icon: "success",
            confirmButtonText: "Cerrar",
        });
    }

  return (
    <>
        <section className='p-0 m-0  flex-col items-center justify-center relative'>
        
            <div className='absolute top-0 left-0 h-20 w-[100%] flex items-center justify-between ' >
                <div className='flex items-center ml-5' >
                    <p className='text-6xl text-green-500 font-poppins font-semibold' > TES </p>
                    <article className='bg-green-400 w-14 flex items-center justify-center ml-2 rounded-xl' >
                        <p className='text-6xl font-poppins font-semibold text-white' >H</p>
                    </article>
                    <p className='text-3xl font-poppins font-medium text-green-900 ml-3' >Equipo 1</p>
                </div>
                <div className='h-[80%] w-[30%]' >
                    <button className="mr-5 bg-green-500 p-3  text-3xl text-white font-poppins font-semibold rounded-xl hover:bg-white hover:text-green-500 border-2 border-solid border-green-500  transition duration-700" onClick={activarVentana}  >Dato curioso</button>
                    <button className='mr-5 bg-none border-2 border-solid border-green-500 p-3 text-3xl text-green-500 font-poppins font-semibold rounded-xl hover:bg-green-500 hover:text-white transition duration-700' >TEMAS</button>
                </div>
            </div>

            <section className=' h-screen flex items-center justify-evenly ' >
                <div className="titulo">
                    <h1 className='text-8xl font-titan  text-primario ' >DESARROLLO <br /> SUSTENTABLE</h1>
                    <p className='text-5xl font-amatic text-green-900 ' >Página web para disminuir el uso de <br /> papel en las evaluaciones de la materia <br /> de desarrollo sustentable.</p>
                </div>
                <Planeta />
            </section>
        </section>
        <Temas />
    </>
  )
}

export default Home;
