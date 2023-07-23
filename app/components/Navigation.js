"use client"
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi"
import { PiFilmReel, PiTelevisionSimple } from "react-icons/pi"
import { usePathname } from "next/navigation"


const Navigation = () => {

    const navlink = usePathname()

    return ( 
        <nav className="text-white text-sm flex justify-between py-2.5 px-5">
            <Link href={"/"} className={navlink == "/" ? "text-white" : "text-neutral-400"}><BiHomeAlt2 className=""/>Home</Link>
            <Link href={"/movies"} className={navlink == "/movies" ? "text-white" : "text-neutral-400"}><PiFilmReel className=""/>Movies</Link>
            <Link href={"/tvseries"} className={navlink == "/tvseries" ? "text-white" : "text-neutral-400"}><PiTelevisionSimple className=""/>Tv series</Link>
        </nav>
     );
}
 
export default Navigation;