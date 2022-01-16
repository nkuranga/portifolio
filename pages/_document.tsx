import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document{
    render(){
        return(
            <Html lang="EN">
                <Head>
                    <meta
                    name="description"
                    content="Full stack developer"
                    />
                    <meta
                    name="description"
                    content="IT Consultant"
                    />
                    
                </Head>
                
                <body className="bg-gray-200 ">
                    <Main/>
                    <NextScript/>
                </body>
               
            </Html>
        )
    }
}


export default MyDocument