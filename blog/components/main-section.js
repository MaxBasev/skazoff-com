import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'

export default function mainSection(){
    return(
        <section className="container mx-auto md:px-20 py-10">
            <h2 className="font-bold text-4xl py-12 text-center">Latest posts</h2>


            {/* grid columns */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                
            </div>

        </section>
    )
}

function Post(){
    return(
        <div className="item">
            <div className="image">
                <Link href={"/"}><Image src={"/images/doom2.jpg"} className="rounded" width={500} height={350} /></Link>                
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className='category'>
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Games, Memory</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- July 3, 2023</Link>
                </div>
            </div>
            <div className="title">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Doom 2</Link>
            </div>
            <p className='text-gray-500 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Author></Author>
        </div>
    )
}