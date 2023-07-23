import FetchComponent from "./components/FetchComponent";

export default function Home() {
  return (
    <main className="w-full">
      <FetchComponent url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`}/>
    </main>
  )
}
