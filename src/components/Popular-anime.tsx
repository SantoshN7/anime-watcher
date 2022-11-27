import axios from 'axios'
import { useEffect, useState } from 'react';
import { IAnimeInfo } from '../types';
import AnimeList from './anime-list';
import PageTitle from './Page-title'


export default function PopularAnime() {
  const [newEpList, setNewEpList] = useState<IAnimeInfo[]>([]);

  const options = {
    method: 'GET',
    url: `https://${import.meta.env.VITE_API_HOST}/popular`,
    params: {page: '1'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
    }
  };

  useEffect(function() {
    axios.request(options)
    .then(function ({data}: {data: IAnimeInfo[]}) {
      setNewEpList(data);
    })
  }, [])

  return (
    <div className='px-12 sm:px-24 md:px-36 lg:px-48'>
      <PageTitle title={'Popular Anime'}></PageTitle>
      <AnimeList animeList={newEpList}></AnimeList>
    </div>
  )
}