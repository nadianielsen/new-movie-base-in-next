import Image from "next/image";
import { AiFillStar } from "react-icons/ai"
import Genres from "../components/Genres";

const getMovie = async (movie) => {
   
    const result = await fetch
    (`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
        { next: {revalidate: 0}
    })  
    // console.log(await result)
    if (!result.ok) { throw new Error("Failed to fetch movie") }
    return await result.json()
  
  }
  

const Movie = async ({ params: {movie}}) => {

    const movies = await getMovie(movie)
    console.log(movies)

    const imagePath = "http://image.tmdb.org/t/p/original"

    const year = new Date(movies.release_date).getFullYear()

    const hours = Math.floor(movies.runtime / 60)
    const minutes = movies.runtime % 60;


    return ( 
        <main>
                {movies && (
                <article>
                    <div className="w-full h-[20rem] relative bg-gradient-to-t from-neutral-900 to-transparent">
                        <Image src={imagePath + movies.backdrop_path} width={800} height={800} className="absolute w-full h-full object-cover -z-10" alt={movies.id}/>
                    </div>
                    <article className="relative bottom-12 px-2 grid gap-y-2">
                        <h2 className=" text-[1.5rem] font-medium">{movies.title}</h2>
                        <div className="flex text-sm gap-x-4">
                            <p className="">{year}</p>
                            <p className="flex gap-x-1">{movies.vote_average}<AiFillStar className="text-yellow-500 my-0.5 text-base"/></p>
                            <p>{hours + "h " + minutes + "min"}</p>
                        </div>
                        <p className="text-sm">{movies.overview}</p>
                        <Genres genres={movies.genres}/>
                    </article>
                </article>
                )
                }
        </main>
     );
}
 
export default Movie;