import Image from 'next/image'
import Link from 'next/link'

export default function topSection() {
    return(
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Last post Trololo</h1>

            {Slide()}


            </div>
        </section>
    )
}

function Slide() {
    return(
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><Image src={"/images/doom2.jpg"} width={600} height={600} /></Link>                
            </div>
            <div className="info flex justify-center flex-col">
                <div className='category'>
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Games, Memory</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- July 3, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Doom 2</Link>
                </div>
                <p className='text-gray-500 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <h2>author</h2>
            </div>
        </div>
    )
}