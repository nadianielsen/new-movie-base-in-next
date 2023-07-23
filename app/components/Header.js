import Link from "next/link";
import Navigation from "./Navigation";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ['latin-ext'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

const Header = () => {

    return ( 
        <header className="bg-neutral-900/20 backdrop-blur-sm w-full h-16 sticky top-0 flex items-center px-3">
            <Link href={"/"} className={`text-3xl font-medium uppercase  ${outfit.className}`}>Logo</Link>
            <div className="hidden lg:block">
                <Navigation />
            </div>
        </header>
     );
}
 
export default Header;