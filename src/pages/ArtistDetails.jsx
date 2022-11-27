import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Error,RelatedSongs,DetailsHeader,Loader} from '../components'
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';
const ArtistDetails = () => {
  const {id:artistId}=useParams();
  const {isPlaying,activeSong}=useSelector((state)=>state.player)
  const {data: artistData, isFetching: isFetchingArtistDetails, error}=useGetArtistDetailsQuery({artistId})

  if(isFetchingArtistDetails) return <Loader title="Loading artist Details..."/>
  if(error) return <Error/>



  return(
    <div className='flex flex-col'>
      <DetailsHeader 
        artistId={artistId}
        artistData={artistData}
      />

      <RelatedSongs
      data={Object.values(artistData?.songs)}
      isPlaying={isPlaying}
      activeSong={activeSong}
      artistId={artistId}
      />
    </div>
  )
};

export default ArtistDetails;
