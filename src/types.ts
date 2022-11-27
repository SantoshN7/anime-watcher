
​
// animeId: "shadowverse-flame"
// ​​
// animeImg: "https://gogocdn.net/cover/shadowverse-flame.png"
// ​​
// animeTitle: "Shadowverse Flame"
// ​​
// episodeId: "shadowverse-flame-episode-34"
// ​​
// episodeNum: "34"
// ​​
// episodeUrl: "https://gogoanime.film///shadowverse-flame-episode-34"
// ​​
// subOrDub: "SUB"

export interface IEpisodeInfo extends IAnimeBase {
  readonly episodeId: string;
  readonly episodeNum: string;
  readonly episodeUrl: string;
  readonly subOrDub: string;
}

// animeId:"boruto-naruto-next-generations"
// animeTitle:"Boruto: Naruto Next Generations"
// animeImg:"https://gogocdn.net/cover/boruto-naruto-next-generations.png"
// releasedDate:"2017"
// animeUrl:"https://www1.gogoanime.cm//category/boruto-naruto-next-generations"

export interface IAnimeInfo extends IAnimeBase {
  readonly releasedDate: string;
  readonly animeUrl: string;
}

export interface IAnimeBase {
  readonly animeId: string;
  readonly animeImg: string;
  readonly animeTitle: string;
}