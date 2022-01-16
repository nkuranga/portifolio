import Head from "next/head"
import Bar from "../components/Bar"
import { languages, tools } from "../data"

const Resume = () => {
    return (
        <div className="px-6 py-2">
            <Head>
                <title>React Js|Node Js| Node Js</title>
            </Head>
            {/* Education  & experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <p className="my-5 text-2xl font-bold">Education </p>
                <div>
                    <p className="my-2 text-xl font-bold">Information Technolgy</p>
                    <p>Rwanda Polytechnique IPRC Karongi (2017-2021)</p>   
                </div>
                </div>
                <div>
                    <p className="my-5 text-2xl font-bold">Experience </p>
                    <div>
                        <p className="my-2 text-xl font-bold">Information Technolgy</p>
                        <p className="">Rwanda Polytechnique IPRC Karongi (2017-2021)</p>   
                    </div>
                </div>
                
            </div>

            {/* Languages and Tools*/}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <p className="my-3 text-xl font-semibold"> Languages & Frameworks</p>
                    <div className="my-2">
                        {
                            languages.map(language=>(
                                <Bar data={language} key={language.name} />
                        ))
                        }
                    </div>
                </div>

                <div>
                    <p className="my-3 text-xl font-semibold">Tools & Softwares</p>
                    <div className="my-2">
                        {
                            tools.map(tool=>(
                                <Bar data={tool} key={tool.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
