import Image from "next/image";
import Link from "next/link";


const FetchComponent = async ({url, headline}) => {

    const data = await fetch(url)
    const res = await data.json()
    console.log(res)

    const imagePath = "http://image.tmdb.org/t/p/original"

    return ( 
        <article className="mx-3 my-1 flex flex-col gap-y-2">
            <h2 className="capitalize font-semibold lg:text-lg">{headline}</h2>
        <article className="flex gap-x-4 overflow-x-scroll w-auto justify-between my-2 no-scrollbar">
            {res?.results?.map(movie => (
                <Link href={`/${movie.id}`} className="bg-transparent w-[42%] h-[16rem] min-w-[42%] md:w-[25%] md:min-w-[25%] md:h-[18rem] lg:w-[14%] lg:h-[20rem] lg:min-w-[14%] relative rounded-2xl hover:bg-neutral-200 transition-all">
                    <Image key={movie.id} src={imagePath + movie.poster_path} width={800} height={800} alt={movie.title} className="absolute w-full h-full rounded-2xl object-cover hover:opacity-90 transition-all hover:drop-shadow-lg"/>
                </Link>
            ))}
        </article>
        </article>
     );
}
 
export default FetchComponent;