import Perfil from "./components/Perfil"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center justify-center bg-blue-950">
      <div className="grid grid-rows-1 h-full ">
        <div className="h-[50%] flex items-center justify-between">
          <Perfil />
          <Skills />
        </div>
        <div className="h-[50%] ">
          sadasdasda
        </div>
      </div>
      <div>
        ssss
      </div>
    </div>
  )
}

export default App