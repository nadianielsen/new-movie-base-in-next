import Navigation from "./Navigation";


const Footer = () => {
    return ( 
        <footer className="bg-gradient-to-t from-black/80 to-transparent lg:bg-black fixed lg:static  backdrop-blur-[1px] bottom-0 w-full h-20 py-2.5">
            <div className="block lg:hidden">
                <Navigation />
            </div>
        </footer>
     );
}
 
export default Footer;