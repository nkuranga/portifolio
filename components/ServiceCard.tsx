import { FunctionComponent } from "react"
import { IServices } from "../type"

const ServiceCard:FunctionComponent<{service:IServices}> = ({service:{id,Icon,title,about}}) => {
    const createMarkup = ()=>{
        return{
            __html:about
        }
    }
    return (
        <div className='flex items-center p-2 space-x-4'>
            <Icon className='w-12 h-12 text-green-500 '/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default ServiceCard
