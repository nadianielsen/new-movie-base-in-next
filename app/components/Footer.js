import Navigation from "./Navigation";


const Footer = () => {
    return ( 
        <footer className="bg-black/90 backdrop-blur-lg fixed bottom-0 w-full h-20 py-2.5">
            <div className="block lg:hidden">
                <Navigation />
            </div>
        </footer>
     );
}
 
export default Footer;