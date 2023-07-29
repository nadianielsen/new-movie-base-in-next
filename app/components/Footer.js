import Link from "next/link";
import Navigation from "./Navigation";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa" 

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return ( 
        <footer className="bg-gradient-to-t from-black/80 to-transparent lg:bg-black fixed lg:static backdrop-blur-[1px] bottom-0 w-full h-20 lg:h-56 py-2.5 ">
            <div className="block lg:hidden">
                <Navigation />
            </div>
            <article className="lg:grid lg:grid-rows-3 lg:gap-y-6 lg:place-content-center hidden">
                <article className="flex gap-x-4 items-end">
                    <Link href={"/"} className="border-b hover:border-0">Privacy Policy</Link>
                    <Link href={"/"} className="border-b hover:border-0">Terms of use</Link>
                    <Link href={"/"} className="border-b hover:border-0">Contact us</Link>
                </article>
                <article className="flex gap-x-6 text-xl justify-center items-center">
                    <Link href={"/"} className="hover:text-blue-500"><FaFacebookF /></Link>
                    <Link href={"/"} className="hover:text-cyan-400"><FaTwitter /></Link>
                    <Link href={"/"} className="hover:text-pink-500"><FaInstagram /></Link>
                </article>
            <h2 className="row-start-3 justify-self-center self-start text-neutral-400"> &copy;Copyright - {year} </h2>
            </article>
        </footer>
     );
}
 
export default Footer;