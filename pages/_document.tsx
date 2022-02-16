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
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
                    <meta
                    name="description"
                    content="IT Consultant"
                    />
                    
                </Head>
                
                <body>
                    <Main/>
                    <NextScript/>
                </body>
               
            </Html>
        )
    }
}


export default MyDocument