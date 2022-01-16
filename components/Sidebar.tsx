import {AiFillTwitterCircle,AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'

import {GiTie} from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'
import { RiComputerLine } from 'react-icons/ri'
import Head from 'next/head'
const Sidebar = () => {
    return (
        <div>
            <Head>
                <title>Web Programmer | API creator</title>
            </Head>
            <div className="flex justify-center">
                <img src="../images/me.JPG" alt="me" width="128px" height="128px" 
                className="w-32 h-32 rounded-full mx-30 lg:mx-10 max-auto" />
            </div>
            
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan"> 
            John Nkuranga
            </h3>
            <p className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full">
                <RiComputerLine className='mr-2'/> Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" 
            href="" download="Resume.pdf">
               <GiTie/> Download Resume</a>
            
            <div className="flex justify-around my-5 md:w-full">
                {/* Social Icons */}
                <a>
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a>
                    <AiFillTwitterCircle className='w-8 h-8 cursor-pointer text-sky-400'/>
                </a>
                <a>
                    <AiFillFacebook className='w-8 h-8 cursor-pointer text-sky-700'/>
                </a>
                <a>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer text-sky-700'/>
                </a>

            </div>
            <div className="py-5 my-5" style={{marginLeft:"-0.5rem",marginRight:"-0.5rem"}}>

                <div className='flex items-center justify-center space-x-1'>
                    <GoLocation/><span>Kigali, Rwanda</span>
                </div>
                <p className="my-2">nkurangajohncastor@gmail.com</p>
                <p className="my-2">+250 78 026 3922</p>
            </div>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-500 to-blue-500"
            onClick={()=> window.open('mailto:nkurangajohncastor@gmail.com')}>Email me</button>
            {/* <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-500 to-blue-500">Toggle Them</button> */}
        </div>
    )
}
export default Sidebar
