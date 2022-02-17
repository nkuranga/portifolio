import Link from 'next/link'
import { useRouter } from 'next/router'
import {FunctionComponent, useEffect, useState} from 'react'

const NavItems:FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string

}> = ({activeItem,setActiveItem,name,route})=>{
    return(
        
            activeItem !== name ? (
                <Link href={route}>
                    <a>
                        <span onClick={()=> setActiveItem(name)} 
                        className=' hover:text-green'>{name}</span>
                    </a>
                </Link>
            ): null
    )
}

const Navbar = () => {
    const [activeItem,setActiveItem]= useState<string>('')
    const {pathname} = useRouter()

    useEffect(() => {
        if(pathname === '/')setActiveItem( 'About')
        if(pathname === '/Resume')setActiveItem( 'Resume')
        if(pathname === '/Projects')setActiveItem( 'Projects')
    }, [pathname])
    return (
        <div className='flex justify-between px-5 py-3 my-4'>
            <span className='text-xl border-b-4 text-green text-bold md:text-2xl'>{activeItem}</span>
            <div className='space-x-5 text-lg'>
            <NavItems activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/"/>
            <NavItems activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/Resume"/>
            <NavItems activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/Projects"/>

            </div>
            
        </div>
    )
}

export default Navbar
