import { IAnimeBase } from "../types";

export default function AnimeCard<T>({animeInfo}: {animeInfo: T extends IAnimeBase ? any : any}) {
  return (
    <div className="flex flex-col bg-gray-500 border border-gray-500 rounded cursor-pointer">
      <img className="w-full h-[85%]" src={animeInfo.animeImg} alt={`Anime cover - (${animeInfo.animeTitle})`}></img>
      <div className="w-full h-[15%] flex flex-col items-center justify-center px-2">
        <p className="w-full text-white font-light text-sm text-center truncate">{animeInfo.animeTitle}</p>
        { !!animeInfo.episodeNum && <p className="font-medium text-white text-md">{animeInfo.episodeNum}</p> }
      </div>
    </div>
  )
}