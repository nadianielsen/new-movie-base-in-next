import Link from "next/link";
import Navigation from "./Navigation";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ['latin-ext'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

const Header = () => {

    return ( 
        <header className="bg-gradient-to-t from-neutral-900 to-black/40 w-full h-16 py-2 px-3">
            <Link href={"/"} className={`text-2xl font-medium uppercase  ${outfit.className}`}>Logo</Link>
            <div className="hidden lg:block">
                <Navigation />
            </div>
        </header>
     );
}
 
export default Header;