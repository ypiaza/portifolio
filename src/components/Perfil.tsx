import { perfilData, infoPersonal } from '../data/data';
import { useState } from 'react'

const Perfil = () => {
  const [resume, setResume] = useState(false);
  // Fazer efeito de mouse no resumo do texto de apresentação

  return (
    <div className='h-full flex items-center justify-center relative'>
      {perfilData.map((item: infoPersonal) => (
        <div className='relative bg-cover bg-no-repeat bg-center w-full h-full '
        style={{
          backgroundImage: `url(${item.image})`
        }}>
          <div
          onMouseOver={() => setResume(true)}
          onMouseOut={() => setResume(false)}
          className={`absolute flex items-center justify-center p-6 w-full h-full duration-300 border border-white/10 ${resume ? 'backdrop-blur-2xl shadow-2xl shadow-white/50 border-white/50 bg-white/30' : ''}`}>
            <h3 className={`text-justify font-medium text-zinc-900 `}>{`${resume ? `${item.resume}` : ''}`}</h3>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Perfil