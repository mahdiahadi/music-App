import React from 'react';
import SongBar from './SongBar';

const RelatedSongs = ({data,isPlaying,activeSong,handlePauseClick,handlePlayClick,artistId}) => {


  return(
    <div className="flex flex-col">
        <h1 className='font-bold text-3xl text-white mb-1'>Related Songs:</h1>

        {data?.map((song,i)=>(
            <SongBar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            />
        ))}
    </div>
  )
}

export default RelatedSongs;
