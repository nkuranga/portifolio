import Head from 'next/head'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className='grid grid-cols-12 gap-2 px-2 my-3 lg:px-32'>
      <Head>
        <title>Web Developer | API creator</title>
      </Head>
    <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl'>
    <Sidebar/>
    </div>
    <div className='col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl'>
    <Navbar/>
    <Component {...pageProps} />
    </div>
  </div>
  
  )
  
}

export default MyApp
