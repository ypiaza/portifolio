import { Dados, projects } from '../data/data'

const Projects = () => {
    return (
        <div className="grid grid-cols-1 grid-rows-3 justify-center items-center h-full">
            {Dados.map((item: projects, index: number) => (
                <div className='flex flex-col p-4 '>
                    <div>
                        <h2 className='font-bold text-white'>{item.name}</h2>
                        <h3 className='font-semibold text-[0.80rem] text-white'>{item.tecnologies}</h3>
                    </div>
                    <div>
                        <img src={item.image} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects