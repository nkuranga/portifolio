import{FunctionComponent} from 'react'
import { category } from '../type'

export const NavItem:FunctionComponent<{value:category | "All",
        handleFilterCategory:Function,active:string}>= 
            ({
                value,
                handleFilterCategory,
                active
            })=>{

    let className = 'capitalize cursor-pointer hover:text-green'
    if(active === value){
        className += ' text-green-500'
    }

    return (
        <ul>
            <li className={className}
            onClick={()=>handleFilterCategory(value)}>
            {value} |
        </li>
        </ul>
    )
}


const ProjectsNavbar:FunctionComponent<{handleFilterCategory:Function,active:string}> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
            <NavItem value='All' {...props}/>
            <NavItem value='Python' {...props}/>
            <NavItem value='React Js' {...props}/>
            <NavItem value='Node Js' {...props}/>
            <NavItem value='Django' {...props}/>
        </div>
    )
}

export default ProjectsNavbar
