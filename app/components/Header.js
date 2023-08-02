import Link from "next/link";
import Navigation from "./Navigation";
import { Outfit } from "next/font/google";
import { BiSearch } from "react-icons/bi";

const outfit = Outfit({ subsets: ['latin-ext'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

const Header = () => {

    return ( 
        <header className="bg-transparent w-full h-16 flex z-40 items-center justify-between lg:justify-around px-3 lg:bg-[#101010]/70 lg:backdrop-blur-sm lg:sticky lg:top-0">
            <Link href={"/"} className={`text-3xl font-medium uppercase  ${outfit.className}`}> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-400 to-white">Film</span>Base</Link>
            <div className="hidden lg:block">
                <Navigation />
            </div>
            <Link href={"/search"}><BiSearch className="text-[1.7rem]"/></Link>
            {/* <div className="flex gap-x-5 items-center">
                <Link href={"/search"}><BiSearch className="text-[1.7rem]"/></Link>
                <div className="border-2 rounded-full p-1">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
                </div>
            </div> */}
        </header>
     );
}
 
export default Header;