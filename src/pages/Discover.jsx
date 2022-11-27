import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice'
import { Loader,Error,SongCard } from "../components";
import {genres} from '../assets/constants'
import { useGetSongsByGenreQuery, useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () =>{
    const dispatch=useDispatch();
    const { genreListId } = useSelector((state) => state.player);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const {data,isFetching,error}=useGetSongsByGenreQuery(genreListId || 'POP')

    if(isFetching) return <Loader title="Loading songs..."/>

    if(error) return <Error/>
    const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
    return(
        <div className='flex flex-col'>
            <div className='w-full flex justify-between  sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='text-white font-bold text-3xl text-left'>Discover {genreTitle}</h2>
                <select
                    onChange={(e)=>dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || "POP"}
                    className="bg-black text-gray-300 text-sm p-3 rounded-lg outline-none sm:mt-0 m-5"
                >
                    {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song,i)=>(
                <SongCard
                    key={song.key}
                    i={i}
                    song={song}
                    activeSong={activeSong}
                    data={data}
                    isPlaying={isPlaying}
                    />
                ))}
            </div>
        </div>
    )
} 

export default Discover;
