"use client"
import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi"
import { PiFilmReel, PiTelevisionSimple } from "react-icons/pi"
import { usePathname } from "next/navigation"


const Navigation = () => {

    const navlink = usePathname()

    return ( 
        <nav className="text-white text-sm flex justify-between py-2.5 px-5 lg:gap-x-20">
            <Link href={"/"} className={navlink == "/" ? "text-white font-medium lg:border-b-2 " : "text-neutral-300 hover:text-white hover:font-medium"}><BiHomeAlt2 className="mx-2 text-lg lg:hidden"/>Home</Link>
            <Link href={"/movies"} className={navlink == "/movies" ? "text-white font-medium lg:border-b-2" : "text-neutral-300 hover:text-white hover:font-medium"}><PiFilmReel className="mx-3 text-lg lg:hidden"/>Movies</Link>
            <Link href={"/tvseries"} className={navlink == "/tvseries" ? "text-white font-medium lg:border-b-2" : "text-neutral-300 hover:text-white hover:font-medium"}><PiTelevisionSimple className="mx-5 text-lg lg:hidden"/>Tv series</Link>
        </nav>
     );
}
 
export default Navigation;