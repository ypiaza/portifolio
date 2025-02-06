import { Dados, projects } from '../data/data'
import { useState } from 'react'

const Projects = () => {

    const [effectProject, setEffectProject] = useState<number | null>(null);


    return (

        <div className="flex flex-col  items-center h-full">

            {Dados.map((item: projects, index: number) => (
                <div 
                key={index} 
                className='grid grid-cols-2 p-4 cursor-pointer h-full w-full relative border border-white/10 hover:border-white/50 hover:shadow-2xl hover:shadow-white/30 duration-300 overflow-hidden'
                onMouseOver={() => setEffectProject(index)}
                onMouseOut={() => setEffectProject(null)}
                >

                    <div className={`h-full flex text-white flex-col justify-center items-start transition-all duration-300 ${effectProject === index ? ' absolute w-full p-10 top-0 flex justify-between text-gray-900 z-20' : ''}`}>
                        <h2 className={`font-bold  ${effectProject === index ? ' text-gray-900 z-20' : ''}`}>{item.name}</h2>
                        <h3 className={`font-semibold text-[0.80rem] ${effectProject === index ? ' text-gray-900 z-20' : ''}`}>{item.tecnologies}</h3>
                    </div>

                    <div className={` bg-cover bg-center w-full duration-300 ${effectProject === index ? 'absolute h-full w-full bottom-0 rounded-none' : ''}`}
                         style={{backgroundImage: `url(${item.image})`}}>
    
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Projects