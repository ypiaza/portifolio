import Contact from "./components/Contact"
import Perfil from "./components/Perfil"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Statistc from "./components/Statistc"

const App = () => {
  return (
    <div className="h-screen grid grid-cols-3 items-center justify-center bg-zinc-900">
      <div className="flex flex-col h-full ">
        <Perfil />
        <div className="h-full">
          <Skills />
        </div>
      </div>
      <div className="h-full">
        <Projects />
      </div>
      <div className="grid grid-cols-1 grid-rows-2 h-full">
        <Contact />
        <Statistc />
      </div>
    </div>
  )
}

export default App