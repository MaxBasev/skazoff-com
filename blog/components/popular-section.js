import Link from 'next/link'
import Image from 'next/image'
import Author from './_child/author'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';

export default function popularSection () {
    return (
        <section className="container mx-auto md:px-20 py-16">        
            
            <h2 className="font-bold text-4xl py-12 texxt-center">Most Popular</h2>

            {/* swiper */}

            <Swiper
                            slidesPerView={2}
                            loop={true}
                            autoplay={{ 
                                delay: 3000 }}
            >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>


    </section>

    )
}

function Post(){
    return(
        <div className="grid">
            <div className="image">
                <Link href={"/"}><Image src={"/images/doom2.jpg"} width={600} height={400} /></Link>                
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className='category'>
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Games, Memory</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- July 3, 2023</Link>
                </div>
            </div>
            <div className="title">
                    <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Doom 2</Link>
            </div>
            <p className='text-gray-500 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Author></Author>
        </div>
    )
}