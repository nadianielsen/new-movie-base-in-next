"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import BannerLoading from "./BannerLoading";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BiSolidInfoCircle } from "react-icons/bi";


const BannerHome = () => {
    const [featured, setFeatured] = useState();
    const [backdrop, setBackdrop] = useState();
    const [reloadImage, setReloadImage] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                    // går ind og tager et tilfældigt billede 
        let randomMovie = Math.floor(Math.random() * 20)
        // hvis reloadImage, så vi får det her axios kald
        if(reloadImage) {
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=75f15351c6119a96302b866663e596b0&language=en&page=1`)
            .then((response) => setFeatured(response.data.results[randomMovie]))
            .finally(() => setReloadImage(false))
        }
    }, [reloadImage]);

    useEffect(() => {
        if (featured) {
            axios(`https://api.themoviedb.org/3/movie/${featured.id}/images?api_key=75f15351c6119a96302b866663e596b0&language=en`)
            .then((response) => {
                // derfor den ikke skal return undefined, så vil der komme en blank box
                console.log(response.data)
                if (response.data.backdrops[0] !== undefined) {
                    setBackdrop(response.data.backdrops[0])
                } else {
                    setReloadImage(false)
                }
            })
            .finally(() => setLoading(false))
        }
    }, [featured]);


    return loading ? <BannerLoading /> : ( 
        <Link href={`/${featured.id}`} >
            <div className="w-full h-[20rem] lg:h-[42rem] bg-gradient-to-t from-[#101010] via-transparent to-[#101010] relative flex justify-center lg:justify-normal items-end">
                <Image src={`https://image.tmdb.org/t/p/original${backdrop?.file_path}`} alt={backdrop?.title} className="w-full h-full absolute -z-10 object-cover" width={1000} height={1000} />
                <div className="py-6 lg:px-14 lg:py-[5rem]">
                    <h2 className="text-lg lg:text-[2.5rem] font-medium drop-shadow-sm text-center">{featured?.title}</h2> 
                    <button className="bg-neutral-300/20 backdrop-blur-sm w-32 h-10 rounded-md flex items-center justify-center gap-x-2 hover:bg-white/30 transition-all my-4 mx-auto lg:mx-0">More info<span className="border-l w-2 h-5"></span><BiSolidInfoCircle /></button>    
                </div>  
            </div>
        </Link>
     );
}
 
export default BannerHome;