import axios from 'axios'
import PageTitle from './Page-title'
import AnimeList from './anime-list';
import { useState, useEffect } from 'react';
import { IEpisodeInfo } from '../types';

export default function RecentEp() {
  const [newEpList, setNewEpList] = useState<IEpisodeInfo[]>([]);

  const options = {
    method: 'GET',
    url: `https://${import.meta.env.VITE_API_HOST}/recent-release`,
    params: {type: '1', page: '1'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
    }
  };

  useEffect(function() {
    axios.request(options)
    .then(function ({data}: {data: IEpisodeInfo[]}) {
      setNewEpList(data);
    })
  }, [])

  return (
    <div className='px-12 sm:px-24 md:px-36 lg:px-48'>
      <PageTitle title={'Recent Episodes'}></PageTitle>
      <AnimeList animeList={newEpList}></AnimeList>
    </div>
  )
} 