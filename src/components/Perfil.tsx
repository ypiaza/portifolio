import { perfilData, infoPersonal } from '../data/data';
import { useState } from 'react'

const Perfil = () => {
  const [resume, setResume] = useState(false);
  // Fazer efeito de mouse no resumo do texto de apresentação

  return (
    <div className='h-full flex items-center justify-center relative'>
      {perfilData.map((info: infoPersonal, index: number) => (
        <div key={index} className="bg-cover bg-center w-full h-full relative"
        style={{backgroundImage: `url(${info.image})`}} >
          <div
            onMouseOver={() => setResume(true)}
            onMouseOut={() => setResume(false)}
            className={`cursor-pointer absolute h-full w-full flex items-center justify-center p-4 duration-300 border-2 border-white/10 ${resume ? 'shadow-2xl shadow-gray-500 border-blue-300 rounded' : ''}`}
          >
            <p className={`text-gray-300 font-bold ${resume ? 'flex' : 'hidden'}`}>
              {info.resume}
            </p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Perfil