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
        Experienced and Passionate about the development of web applications and
        solutions. Currently working in NodeJS and ReactJS. I am a person with
        an analytical and creative mind to develop ideas and products and also
        keep myself updated in this field. Being able to work under pressure
        while maintaining high levels of quality is always something that
        fascinates me.
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

