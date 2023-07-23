import Image from "next/image";


const FetchComponent = async ({url}) => {

    const data = await fetch(url)
    const res = await data.json()

    const imagePath = "http://image.tmdb.org/t/p/original"


    return ( 
        <article className="">
            {res.results.map(movie => (
                <Image key={movie.id} src={imagePath + movie.poster_path} width={800} height={800} alt={movie.title} className=""/>
            ))}
        </article>
     );
}
 
export default FetchComponent;