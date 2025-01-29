import { Dados, projects } from '../data/data'
import { useState } from 'react'

const Projects = () => {

    const [effectProject, setEffectProject] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 grid-rows-3 justify-center items-center h-full ">

            {Dados.map((item: projects, index: number) => (
                <div 
                key={index} 
                className='grid grid-rows-2 p-4 cursor-pointer h-full relative border border-white/10 hover:border-white/50 hover:shadow-2xl hover:shadow-white/30 duration-300 overflow-hidden'
                onMouseOver={() => setEffectProject(index)}
                onMouseOut={() => setEffectProject(null)}
                >

                    <div className={`${effectProject === index ? 'absolute -translate-y-56 duration-300' : ''}`}>
                        <h2 className={`font-bold text-white`}>{item.name}</h2>
                        <h3 className='font-semibold text-[0.80rem] text-white'>{item.tecnologies}</h3>
                    </div>

                    <div className={`${effectProject === index ? '' : ''}`}>
                        <img className='w-full' src={item.image} />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Projects