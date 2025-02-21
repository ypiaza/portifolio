import { skills, dataSkill } from "../data/skills"
import { useState } from "react";


const Skills = () => {
  const [hoverSkill, setHoverSkill] = useState<number | null>(null);

  return (
    <div className='w-full grid grid-cols-2 h-full text-white/70'>
      {skills.map((item: dataSkill, index: number) => (
        <div className={`flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#${item.color}] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#${item.color}] ${hoverSkill === index ? 'delay-700 duration-300' : ''}`}
        onMouseOver={() => setHoverSkill(index)}
        onMouseOut={() => setHoverSkill(null)}
        >
          <item.icon className=' text-4xl' />
        </div>
      ))}
    </div>
  )
}

export default Skills