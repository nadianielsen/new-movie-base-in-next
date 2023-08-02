import BannerHome from "./components/BannerHome";
import BannerUpcoming from "./components/BannerUpcoming";
import FetchComponent from "./components/FetchComponent";

export default function Home() {
  return (
    <main className="w-full grid gap-y-2 mb-4">
      <BannerHome />
      <FetchComponent url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`} headline={"Now playing"} />
      <BannerUpcoming />
      <FetchComponent url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`} headline={"Popular movies"} />
    </main>
  )
}
