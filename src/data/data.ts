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
        resume: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus molestias quisquam, tempore expedita consequuntur dolores quod quia excepturi dicta hic natus eum animi quo quos pariatur commodi? Minus, ratione cumque?',
        image: '../src/img/me.png',
    }
]
