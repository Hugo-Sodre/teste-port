import './App.css';
import About from './components/about';
import Landing from './components/landing';
import Techs from './components/tecnologias';

function App() {
  return (
    <div className='w-full'>
      <div className='w-[90%] mx-auto md:w-[70%]'>
        <header
          className='
            absolute w-[90%] h-16 mx-auto bg-red-500
            md:w-[70%]
          '
        >
          {/* <nav>
          <ul>
            <li><a href="#">Sobre mim</a></li>
            <li><a href="#">Experiência</a></li>
            <li><a href="#">Formação</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav> */}
        </header>

        <main>
         <Landing/>
         <About/>
         <Techs/>
        </main>
      </div>

    </div>
  );
}

export default App;