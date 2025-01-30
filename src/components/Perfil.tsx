import Me from '../img/me.jpg'
import { useState } from 'react'

const Perfil = () => {
    const [resume, setResume] = useState(false);
    // Fazer efeito de mouse no resumo do texto de apresentação

  return (
    <div className='h-full flex items-center justify-center relative'>
        <div className='bg-cover bg-center w-full  relative '
             style={{backgroundImage: `url(${Me})`}}>
            
        </div>

        <div onMouseOver={() => setResume(true)}
             onMouseOut={() => setResume(false)}
             className={`cursor-pointer absolute z-50 h-full w-full flex items-center justify-center p-4 duration-300 border-2 border-white/10 ${resume ? 'shadow-2xl shadow-gray-500 border-blue-300 rounded ' : ''}`}>
            <p className={`text-gray-300 font-bold ${resume ? 'flex' : 'hidden'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus molestias quisquam, tempore expedita consequuntur dolores quod quia excepturi dicta hic natus eum animi quo quos pariatur commodi? Minus, ratione cumque?</p>
        </div>
    </div>
  )
}

export default Perfil