"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import BannerLoading from "./BannerLoading";
import Link from "next/link";


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
            <div className="w-full h-[20rem] lg:h-[42rem] bg-gradient-to-t from-[#101010] via-transparent to-[#101010] relative flex justify-center">
                <Image src={`https://image.tmdb.org/t/p/original${backdrop?.file_path}`} alt={backdrop?.title} className="w-full h-full absolute -z-10 object-cover" width={1000} height={1000} />  
                <h2 className="absolute bottom-0 px-3 py-12 lg:py-24 text-lg lg:text-2xl font-medium">{featured?.title}</h2> 

            </div>
        </Link>
     );
}
 
export default BannerHome;