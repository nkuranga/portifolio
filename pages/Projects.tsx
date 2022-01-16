import Head from "next/head"
import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectData } from "../data"
import { category } from "../type"

const Projects = () => {
    const [projects, setProjects]= useState(projectData)

    const [active, setActive] = useState("All")

    const handleFilterCategory = (category: category | "All")=>{
        if(category === "All"){
            setProjects(projectData)
            setActive(category)
            return
        }
        const newArray= projectData.filter(project=>project.category.includes(category))
        setProjects(newArray)
        setActive(category)
    }

    return (
        <div className="px-5 py-2 overflow-y-auto" style={{height:"85vh"}}>
            <Head>
                <title>Using Different trchnologies</title>
            </Head>
            <nav><ProjectsNavbar handleFilterCategory={handleFilterCategory}
             active={active}/></nav>

            <div className="relative grid grid-cols-12 gap-4 my-3">
                {
                    projects.map(project=>(
                        <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4"
                         key={project.name} >
                            <ProjectCard project={project} />
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
