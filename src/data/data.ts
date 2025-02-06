export interface projects{
    name: string,
    tecnologies: string,
    image: string,
    link: string,
}

export const Dados: projects[] = [
    {
        name: 'To do list',
        tecnologies: 'Html, CSS e JS',
        image: '../src/img/todolist.png',
        link: 'https://ypiaza.github.io/To-Do-List/',
    },
    
    {
        name: 'Assistente EVA (projeto báisco)',
        tecnologies: 'React, Js, Tailwind CSS',
        image: 'https://placehold.co/600x400',
        link: '/',
    },
    
    {
        name: 'Projeto 2',
        tecnologies: 'React, Js, Tailwind CSS',
        image: 'https://placehold.co/600x400',
        link: '/',
    }
]


export interface infoPersonal{
    resume: string,
    image: string,
}

export const perfilData: infoPersonal[] = [
    {
        resume: 'Olá, eu sou Yuri Piaza, tenho 27 anos e sou estudante de Desenvolvimento Web, apaixonado por criar interfaces modernas e funcionais. Trabalho com HTML, CSS, JavaScript, Typescript, React e Tailwind CSS, focando em transformar ideias em experiências digitais atraentes, eficientes e responsivas. Estou sempre em busca de novos desafios para evoluir minhas habilidades em frontend e entregar soluções inovadoras, priorizando a experiência do usuário.',
        image: '../src/img/me.jpg',
    }
]

export interface contacto{
    name: string,
    link: string,
    icon: string,
}