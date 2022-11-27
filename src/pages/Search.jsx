import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SongCard,Error,Loader } from '../components';
import { useGetSongBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const {searchTerm}=useParams()
  const {isPlaying,activeSong}=useSelector((state)=>state.player)
  const {data,isFetching,error}=useGetSongBySearchQuery(searchTerm)

  if(isFetching) return <Loader title={`Searching ${searchTerm}...`}/>
  if(error) return <Error/>

  const songs= data?.tracks?.hits.map((song)=>song.track)

  return(
    <div className='flex flex-col'>
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {
          songs.map((song,i)=>(
            <SongCard
              i={i}
              song={song}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
              key={song.key}
            />
          ))
        }
      </div>
    </div>
  )
};

export default Search;
