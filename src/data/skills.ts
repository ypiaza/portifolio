export interface dataSkill{
    icon: React.ElementType,
    color: string,
}

import { FaReact, FaHtml5, FaCss3, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";

export const skills: dataSkill[] = [
    {
        icon: FaHtml5,
        color: 'E44D26'
    },
    {
        icon: FaCss3,
        color: '1572B6'
    },
    {
        icon: SiJavascript,
        color: 'F7DF1E'
    },
    {
        icon: FaGitAlt,
        color: '6E7681'
    },
    {
        icon: FaGithub,
        color: 'E44D26'
    },
    {
        icon: FaReact,
        color: '61DAFB'
    },
    {
        icon: RiTailwindCssFill,
        color: '38B2AC'
    },
    {
        icon: SiTypescript,
        color: '3178C6'
    },
]