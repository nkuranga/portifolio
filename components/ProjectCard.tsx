import Image from "next/image"
import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { ISProjects } from "../type"

const ProjectCard:FunctionComponent<{project:ISProjects}> = 
(
    {
        project:
        {
            name,
            description,
            image_url,
            github_url,
            deployed_url,
            category,
            key_technology
        }
    }) => {

        const [showDetails, setShowDetails]= useState(false)
    return (
        <div>
            <Image src={`/${image_url}`} 
            alt={name} 
            width="300px"
            height="200px" 
            layout="responsive"
            quality="100"
            className="cursor-pointer"
            onClick={()=>setShowDetails(true)}/>
            <p className="my-2 text-center">{name}</p>
            {
                showDetails && (
                    <>
            <div className="absolute top-0 left-0 z-10 grid w-full h-auto grid-cols-2 p-2 text-gray-100 bg-gray-600">
                <div className="my-2">
                    
                    <Image src={`/${image_url}`} 
                    alt={name} 
                    width="300px"
                    height="200px" 
                    layout="responsive"
                    quality="100"
                    />
            <div className="flex justify-center my-4 space-x-3 text-black">
                <a href={github_url} className="flex items-center px-2 py-1 space-x-2 text-sm bg-gray-200 rounded-sm lg:px-4 lg:py-2 ">
                    <AiFillGithub/>
                    <span>Github</span>
                </a>
                <a href={deployed_url} className="flex items-center px-2 py-1 space-x-2 text-sm bg-gray-200 rounded-sm lg:px-4 lg:py-2">
                    <AiFillProject/>
                    <span>Project</span>
                </a>
                </div>
            </div>
                
            <div className="ml-3">
                <h3 className="mt-2 mb-4 text-xl font-medium md:text-2xl">{name}</h3>
                <h4 className="mt-2 mb-4 font-medium">{description}</h4>
                <div className="flex flex-wrap mt-2 space-x-1 tracking-wider lg:mt-5 lg:space-x-3 font-sm">
                    {
                        key_technology.map(tech=>
                            <span key={tech}
                            className="px-1 py-1 my-1 text-black bg-gray-200 rounded-full lg:px-2 lg:py-1"
                            >{tech}</span>
                        )
                    }
                </div>

            </div>
            <button onClick={()=>setShowDetails(false)} 
                className="absolute rounded-full top-3 right-3 focus:outline-none">
                <MdClose size={30}/>
            </button>
            </div>

           
            </>
                )
            }
            
            
        </div>
    )
}

export default ProjectCard
