"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import BannerLoading from "./BannerLoading";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io"


const BannerUpcoming = () => {
    const [upcoming, setUpcoming] = useState();
    const [backdrop, setBackdrop] = useState();
    const [reloadImage, setReloadImage] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
                    // går ind og tager et tilfældigt billede 
        let randomMovie = Math.floor(Math.random() * 20)
        // hvis reloadImage, så vi får det her axios kald
        if(reloadImage) {
            axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=75f15351c6119a96302b866663e596b0&language=en&page=1`)
            .then((response) => setUpcoming(response.data.results[randomMovie]))
            .finally(() => setReloadImage(false))
        }
    }, [reloadImage]);

    useEffect(() => {
        if (upcoming) {
            axios(`https://api.themoviedb.org/3/movie/${upcoming.id}/images?api_key=75f15351c6119a96302b866663e596b0&language=en`)
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
    }, [upcoming]);


    return loading ? <BannerLoading /> : ( 
        <Link href={`/${upcoming.id}`} className="my-10" >
            <div className="w-full h-[15rem] lg:h-[20rem] bg-gradient-to-t from-[#101010ad] via-transparent to-[#101010ad] relative flex items-end">
                <Image src={`https://image.tmdb.org/t/p/original${backdrop?.file_path}`} alt={backdrop?.title} className="w-full h-full absolute -z-10 object-cover" width={1000} height={1000} />
                <div className="py-2.5 px-3">
                    <h2 className="font-semibold flex gap-x-1 lg:text-xl">Upcoming<IoIosArrowForward className="mt-1 lg:text-2xl"/></h2>
                    <h3 className="py-2 font-medium text-sm lg:text-base">{upcoming?.title}</h3>
                </div>
            </div>
        </Link>
     );
}
 
export default BannerUpcoming;