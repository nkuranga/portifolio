import { FunctionComponent } from "react"
import { ISkills } from "../type"


const Bar:FunctionComponent<{data:ISkills}> = ({data:{name, Icon, level}}) => {
    return (

        <div className="my-2 text-gray-200 bg-gray-300 rounded-full">
            <div className="flex items-center px-4 py-1 my-2 bg-green-800 rounded-3xl"
            style={{width:level}}
            >
                <Icon className="mr-3"/>
                {name}
            </div>
        </div>
    )
}

export default Bar
