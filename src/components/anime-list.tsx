import { IAnimeBase } from "../types"
import AnimeCard from "./anime-card"

export default function AnimeList({animeList}:{animeList: IAnimeBase[]}) {
  const animecards = animeList.map((animeinfo: IAnimeBase) => (
    <AnimeCard animeInfo={animeinfo} key={animeinfo.animeId}></AnimeCard>
  ))

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
      {animecards}
    </div>
  )
}