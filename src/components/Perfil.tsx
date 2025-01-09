import Me from '../img/me.jpg'
import { useState } from 'react'

const Perfil = () => {
    const [resume, setResume] = useState(false);
    // Fazer efeito de mouse no resumo do texto de apresentação

  return (
    <div className='h-full w-full flex items-center justify-center overflow-hidden relative'>
        <div>
            <img className='w-full h-full' src={Me} />
        </div>

        <div className='absolute h-full w-full flex items-center justify-center p-4'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus molestias quisquam, tempore expedita consequuntur dolores quod quia excepturi dicta hic natus eum animi quo quos pariatur commodi? Minus, ratione cumque?</p>
        </div>
    </div>
  )
}

export default Perfil