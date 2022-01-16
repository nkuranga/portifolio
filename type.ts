import{IconType} from 'react-icons'

export interface IServices {
    id: number,
    title: string,
    Icon: IconType,
    about: string
}

export interface ISkills{
    name: string,
    level: string,
    Icon: IconType
}
export interface ISProjects{
    name: string,
    description: string,
    image_url: string,
    deployed_url: string,
    github_url: string,
    category: category[],
    key_technology: string[]
}
export type category ="Python"|"React Js"|"Node Js"|"Express"|"Django"