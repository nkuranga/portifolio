import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

const index=()=> {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <Head>
        <title>Web Developer and API Creator</title>
      </Head>
      <h5 className='my-3 font-medium'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quasi corrupti repellat dolores! Tenetur sequi, voluptates, 
        mollitia illo esse maiores incidunt fuga rerum ipsa ea numquam
         dicta perferendis libero cupiditate animi.
      </h5>
      <div className='flex-grow p-4 my-5 bg-gray-300 rounded-lg'
       style={{marginLeft:"-1rem",marginRight:"-1rem"}}>
          <h6 className='my-5 text-lg font-bold tracking-wide'>What I offer</h6> 
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
          {services.map((service)=>(
            <div key={service.id} className='col-span-2 bg-gray-200 rounded-lg' style={{transition:"3s ease"}}>
              <ServiceCard service={service}/>
            </div>
          ))}  
        </div> 
      </div>    
    </div>
  )
}
export default index

