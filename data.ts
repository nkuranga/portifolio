import {RiComputerLine} from 'react-icons/ri'
import{FaServer} from 'react-icons/fa'
import{AiOutlineApi} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
import{MdDeveloperMode} from 'react-icons/md'

import { IServices, ISkills, ISProjects } from './type'

export const services:IServices[]=[
    
    {
        id: 1,
        title: 'Frontend Dev',
        Icon: RiComputerLine,
        about: 'I can Build SPA using <b> HTML </b>, <b>CSS</b> and <b>React Js</b>'
    },
    {
        id: 2,
        title: 'Backend Development',
        Icon: FaServer,
        about: 'Handle SQL Database (MySql, PostgreSQL) and document database (MongoDB)'
    },
    {
        id: 3,
        title: 'API Development',
        Icon: AiOutlineApi,
        about: 'I can Develp Rubust API using <b> Restful-api w with </b> and <b>Node Js (Express Framework)</b>'
    },
    {
        id: 4,
        title: 'Competitive Coder',
        Icon: MdDeveloperMode,
        about: 'a daily problem solver in <b>GreenTech</b> and <b>Go Tech</b> '
    }
]
export const languages:ISkills[]=[
    {
        name: 'Python',
        level: '40%',
        Icon: BsCircleFill
    },{
        name: 'React Js',
        level: '80%',
        Icon: BsCircleFill
    },{
        name: 'Django',
        level: '50%',
        Icon: BsCircleFill
    },{
        name: 'Bootstrap',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Material UI',
        level: '60%',
        Icon: BsCircleFill
    },{
        name: 'Java Script',
        level: '60%',
        Icon: BsCircleFill
    },
]
export const tools:ISkills[]=[
    {
        name: 'Photoshop',
        level: '60%',
        Icon: BsCircleFill
    },{
        name: 'Figma',
        level: '40%',
        Icon: BsCircleFill
    },{
        name: 'Illustrator',
        level: '40%',
        Icon: BsCircleFill
    },{
        name: 'Framer',
        level: '45%',
        Icon: BsCircleFill
    }
]

export const projects:ISProjects[]=[
    {
        name:'E-commerce',
        description: 'E-commerce platform for shopping and processes payment',
        image_url: 'images/project1.svg',
        github_url:'https://',
        deployed_url:'http://localhost:3000',
        category:['React Js'],
        key_technology:['React Js','Next Js','Node Js','Express']
    },{
        name:'Blog',
        description: 'E-commerce platform for shopping and processes payment',
        image_url: 'images/project2.svg',
        github_url:'http://localhost:3000',
        deployed_url:'http://localhost:3000',
        category:['Python'],
        key_technology:['Django','Material UI']
    },{
        name:'Blue Monkey Tours',
        description: 'E-commerce platform for shopping and processes payment',
        image_url: 'images/project3.svg',
        github_url:'http://localhost:3000',
        deployed_url:'http://localhost:3000',
        category:['Django'],
        key_technology:['React Js','Next Js','Tailwind css']
    },{
        name:'Online Application',
        description: 'E-commerce platform for shopping and processes payment',
        image_url: 'images/project2.svg',
        github_url:'https://',
        deployed_url:'http://localhost:3000',
        category:['React Js'],
        key_technology:['React Js','Next Js','Node Js','Express']
    },{
        name:'e-Learning',
        description: 'E-commerce platform for shopping and processes payment',
        image_url: 'images/project3.svg',
        github_url:'http://localhost:3000',
        deployed_url:'http://localhost:3000',
        category:['Node Js'],
        key_technology:['Django','Material UI']
    },{
        name:'HillGuest',
        description: 'E-commerce platform for shopping and processes payment',
        image_url: 'images/project1.svg',
        github_url:'http://localhost:3000',
        deployed_url:'http://localhost:3000',
        category:['Django'],
        key_technology:['React Js','Next Js','Tailwind css']
    }
] 
