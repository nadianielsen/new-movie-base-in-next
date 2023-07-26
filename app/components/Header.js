import Link from "next/link";
import Navigation from "./Navigation";
import { Outfit } from "next/font/google";
import { BiSearch } from "react-icons/bi";

const outfit = Outfit({ subsets: ['latin-ext'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

const Header = () => {

    return ( 
        <header className="bg-transparent w-full h-16 flex z-40 items-center justify-between px-3">
            <Link href={"/"} className={`text-3xl font-medium uppercase  ${outfit.className}`}>Logo</Link>
            <div className="hidden lg:block">
                <Navigation />
            </div>
            <Link href={"/search"}><BiSearch className="text-[1.7rem]"/></Link>
        </header>
     );
}
 
export default Header;