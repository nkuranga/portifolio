import{NextApiRequest, NextApiResponse} from 'next'
import {service} from '../../data'

export default (req: NextApiRequest, res:NextApiResponse)=>{
console.log(service)

res.status(200).json(service)

}