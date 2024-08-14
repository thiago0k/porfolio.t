/* eslint-disable react/prop-types */
import './App.css';
import './App.scss';
import { useState} from 'react';

export default  function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [click, setClick] = useState(false);

  function handleClick(index) {
    setSelectedIndex(index);
    if (index === 3) {
      setClick(prevClick => !prevClick);
    }
  }

  window.addEventListener('scroll',function() {
    const headers = document.querySelector('.contenedor-headers');
    if(this.window.scrollY > 10) {
      headers.classList.add('on');
    } else {
      headers.classList.remove('on')
    }
  });

  return (
    <>
      <div>
      <div className='flex justify-center'>
        <header className='contenedor-headers fixed top-2 contenedor-header rounded-3xl p-5 h-1 hidden  sm:block'>
          <ul  className='flex h-full justify-center items-center list-none gap-5 text-white'>
            <li><a onClick={() => handleClick(0)} className={`text-white cursor-pointer ${selectedIndex === 0 ? 'text-yellow-500' : 'text-white'}`}  href="#seccion1">Proyectos</a></li>
            <li><a  onClick={() => handleClick(1)} className={`text-white cursor-pointer ${selectedIndex === 1 ? 'text-yellow-500' : 'text-white'}`} href="#seccion2">Sobre Mi</a></li>
            <li  onClick={() => handleClick(2)} className={`text-white cursor-pointer ${selectedIndex === 2 ? 'text-yellow-500' : 'text-white'}`}>Contacto</li>
            <li
                onClick={() => handleClick(3)}
                className='cursor-pointer rounded-3xl  '
              >
                {click ? (
                  <img className='w-5' src="src/iconos/sol.png" alt="sol" />
                ) : (
                  <img className='w-5' src="src/iconos/luna.png" alt="luna" />
                )}
              </li>
          </ul>
        </header>
        </div>

        <main>
          <div style={{ background: click ? 'white' : '#19192d' }} className='w-full min-h-screen bg-slate-800'>
          <div className="contenedor-presentacion ">
           <ul className="contenedor-interior-presentacion">
        <div className="parte-1"> 
            <img className="image-logo" src="src/iconos/thiago.jpg" alt="logo" />
            <button className="btn-disponible">Disponible Para Trabajar</button>
        </div>

        <li className="item-presentacion uno"><h1  style={{ color: click ? 'black' : 'white' }}>Hola! Soy Thiago,</h1></li>
        <li style={{ color: click ? 'black' : 'white' }} className="item-presentacion"><h3  style={{ color: click ? 'black' : 'white' }}>Apasionado por la tecnología.</h3><strong><br></br>Aprendo y supero nuevos retos<br /> semanalmente y analizo</strong> cómo mejoran mis habilidades a través de ellos.</li>

        <div className="parte-2">
        <button className='btn-1'>Curriculum</button>
          <button className="contactame btn-1">Contactame</button>
         <a href="#"><svg style={{ color: click ? '#322e52' : 'white' }} className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a>
        </div>
        <div>
        <h1 style={{ color: click ? 'black' : 'gainsboro' }}  className='mt-7'>Tecnologias</h1>
          <Tecnologias/>
          </div>
            </ul>
    
     </div>
          </div>
          {/* <div style={{ background: click ? 'white' : '#1e293b' }} id='seccion1' className='w-full min-h-screen bg-slate-800'>hola</div> */}
          <div  style={{ background: click ? 'white' : '#19192d' }}  className=' w-full min-h-screen flex flex-col gap-14  m-auto' id='seccion1'>
            <div>
          <h1 className='mt-14 ml-3' style={{ color: click ? 'black' : 'gainsboro' }}><svg className="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg> Proyectos</h1>
          </div>
            <Proyectos  cambio={{ color: click ? '#1e293b' : 'white' }}/>
            <Proyectos  cambio={{ color: click ? '#1e293b' : 'white' }}/>
            </div>
          <div>
          <div  style={{ background: click ? 'white' : '#19192d' }}  className='w-full min-h-screen ' id='seccion2' ><SobreMi  cambiar={{ color: click ? '#1e293b' : 'white' }}/></div>
          </div>
        </main>

        <div className='flex justify-center'>
          <footer className='sm:hidden fixed bottom-4 h-[54px] max-w-4xl mx-auto z-10 bg-white rounded-md'>
            <ul style={{border: click  ? 'solid 1px #dcdcdc' : 'none', borderRadius: click ? '0.4rem' : '0'}} className='contenedor-ul flex justify-center items-center h-full list-none'>
              <li onClick={() => handleClick(0)} className={`items  text-lg rounded-md p-3 ${selectedIndex === 0 ?'bg-blue-400' : 'bg-white'}`}>
                <a className='text-black' href="#seccion1">Proyectos</a>
              </li>
              <li onClick={() => handleClick(1)} className={`items text-lg rounded-md p-3 ${selectedIndex === 1 ? 'bg-blue-400' : 'bg-white'}`}>
                <a className='text-black' href="#seccion2">Sobre Mi</a>
              </li>
              <li onClick={() => handleClick(2)} className={`items text-lg rounded-md  p-3 ${selectedIndex === 2 ? 'bg-blue-400' : 'bg-white'}`}>
                Contacto
              </li>
              <li
                onClick={() => handleClick(3)}
                className={`cursor-pointer rounded-md  text-lg p-3 ${selectedIndex === 3 ? 'bg-blue-400' : 'bg-white'}`}
              >
                {click ? (
                  <img className='w-4' src="src/iconos/sol.png" alt="sol" />
                ) : (
                  <img className='w-4' src="src/iconos/luna.png" alt="luna" />
                )}
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
}

function Tecnologias() {
  return(
    <>
     <div className='flex justify-center  flex-wrap gap-3 mt-4'>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300  border-solid border-gray-300 p-2 rounded-lg'>
      <img className='w-[70px]' src="src/iconos/tecnologias-color/html5 (1).svg" alt="" />
      </div>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300    border-solid border-gray-300 p-2 rounded-lg'>
       <img className='w-[70px]' src="src/iconos/tecnologias-color/css.svg" alt="" />
      </div>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
        <img className='w-[70px]' src="src/iconos/tecnologias-color/javascript (1).svg" alt="" />
      </div>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
        <img className='w-[70px]' src="src/iconos/tecnologias-color/react (1).svg" alt="" />
      </div>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
        <img className='w-[70px]' src="src/iconos/tecnologias-color/typescript (1).svg" alt="" />
      </div>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
        <img className='w-[70px]' src="src/iconos/tecnologias-color/tailwindcss (1).svg" alt="" />
      </div>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
        <img className='w-[70px]' src="src/iconos/tecnologias-color/sass (1).svg" alt="" />
      </div>
      <div className='tecnologia flex flex-grow items-center justify-center hover:border-gray-400 duration-300   border-solid border-gray-300 p-2 rounded-lg'>
        <img className='w-[70px]' src="src/iconos/tecnologias-color/git (1).svg" alt="" />
      </div>
      <div className='tecnologia bg-white flex flex-grow items-center justify-center hover:border-gray-400 duration-300  border-solid border-gray-300 p-2 rounded-lg'>
        <img className='w-[70px]' src="src/iconos/tecnologias-color/github-light.svg" alt="" />
      </div>
     </div>
    </>
  )
}

function SobreMi( {cambiar} ) {
  return(
    <>
    <div className='m-auto flex   w-[95%] '>
    <div className='sobre-mi flex flex-col gap-10 mt-10'>
    <h1 style={cambiar} className='flex items-center gap-3'><svg className="size-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>Sobre Mi</h1>
 <div>
   <p style={cambiar} className='text-lg'>Me llamo Thiago Elías Barbero. Nací el 28 de julio de 2006 en Buenos Aires. Empecé en la programación hace 1 año.<strong>Actualmente estoy aprendiendo diariamente.</strong></p>
 </div>
 <div>
  <p style={cambiar} className='text-lg'>Soy un desarrollador web con experiencia en frontend. Me encanta resolver problemas complejos y crear soluciones innovadoras. Busco oportunidades para seguir creciendo en el campo del desarrollo web y contribuir a proyectos desafiantes.<strong>Aprendo y supero nuevos retos semanalmente y analizo cómo mejorar mis habilidades a través de ellos.</strong></p>
 </div>
 <footer style={cambiar}>
 © 2024 <a href="">Thiago</a>. Casi todos los derechos reservados
 </footer>
 </div>    
 </div>
    </>
  )
}


function Proyectos( {cambio} ) {
  return(
    <>
    
    <div className='mb-4 flex flex-col justify-center m-auto gap-5 w-[95%]'>
    <div>
    <div className='bg-slate-500 w-[99%]  h-56 rounded-xl'><img className='w-[100%] h-[100%] rounded-lg' src="https://www.porfolio.dev/projects/svgl.webp" alt="" /></div>
    </div>
    <div className='flex flex-col gap-4'>
      <h2 style={cambio}>SVGL - A beautiful library with SVG logos</h2>
      <div className='flex gap-2'>
      <button className='flex justify-center items-center gap-1 bg-slate-950 border-none w-24  hover:bg-slate-900 duration-500 cursor-pointer h-6 rounded-xl text-white'><img className='w-3' src="src/iconos/tecnologias-color/javascript (1).svg" alt="Javascript" />Javascript</button>
      <button className="flex justify-center items-center gap-1 bg-slate-950 border-none w-20  h-6 hover:bg-slate-900 duration-500 cursor-pointer rounded-xl text-white"><img className='w-3' src="src/iconos/tecnologias-color/tailwindcss (1).svg" alt="Tailwind" />Tailwind</button>
      </div>
      <div >
     <p  className='text-gray-400 leading-6'>Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.</p>
      </div>
    </div>
    <div className='flex gap-2'>
    <button className='flex justify-center items-center gap-1 bg-slate-950 border-none w-20 p-2 hover:bg-slate-900 duration-500 cursor-pointer h-9 rounded-md text-white'><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Code</button>
    <button className="flex justify-center items-center gap-1 bg-slate-950 border-none w-20 p-2 h-9 hover:bg-slate-900 duration-500 cursor-pointer rounded-md text-white"><svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Previw</button>
    </div>
    </div>
    </>
  )
}