import Image from "next/image";
import Link from "next/link";


const FetchComponent = async ({url, headline}) => {

    const data = await fetch(url)
    const res = await data.json()
    console.log(res)

    const imagePath = "http://image.tmdb.org/t/p/original"

    return ( 
        <article className="mx-3 my-1 flex flex-col gap-y-2">
            <h2 className="capitalize font-semibold lg:text-xl">{headline}</h2>
        <article className="flex gap-x-4 overflow-x-scroll w-auto justify-between my-2 no-scrollbar">
            {res.results.map(movie => (
                <Link href={`/${movie.id}`} className="bg-transparent w-[50%] h-[18rem] min-w-[50%] md:w-[30%] md:min-w-[30%] md:h-[22rem] lg:w-[20%] lg:h-[26rem] lg:min-w-[20%] relative rounded-2xl">
                    <Image key={movie.id} src={imagePath + movie.poster_path} width={800} height={800} alt={movie.title} className="absolute w-full h-full rounded-2xl"/>
                </Link>
            ))}
        </article>
        </article>
     );
}
 
export default FetchComponent;