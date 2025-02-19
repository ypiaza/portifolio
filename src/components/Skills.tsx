import { FaReact, FaHtml5, FaCss3, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";


const Skills = () => {
  return (
    <div className='w-full grid grid-cols-2 h-full text-white/70'>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#E44D26] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#E44D26]'>
        <FaHtml5 className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#1572B6] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#1572B6]'>
        <FaCss3 className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#F7DF1E] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#F7DF1E]'>
        <SiJavascript className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#F1502F] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#F1502F]'>
        <FaGitAlt className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#6E7681] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#6E7681]'>
        <FaGithub className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#61DAFB] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#61DAFB]'>
        <FaReact className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#38B2AC] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#38B2AC]'>
        <RiTailwindCssFill className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center border border-white/10 cursor-pointer hover:bg-[#3178C6] duration-300  hover:border-white/20  hover:text-white hover:shadow-2xl hover:shadow-[#3178C6]'>
      <SiTypescript className=' text-4xl' />
      </div>
    </div>
  )
}

export default Skills