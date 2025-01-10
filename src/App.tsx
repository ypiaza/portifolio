import Perfil from "./components/Perfil"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="h-screen grid grid-cols-3 items-center justify-center bg-blue-950">
      <div className="flex flex-col h-full ">
        <Perfil />
        <div className="h-full">
          <Skills />
        </div>
      </div>
      <div>
        a
      </div>
      <div>
        ssss
      </div>
    </div>
  )
}

export default App