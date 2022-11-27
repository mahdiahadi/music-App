import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useGetSongByCountryQuery } from '../redux/services/shazamCore';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';

const CountryTracks = () =>{
    const[country,setCountry]=useState('')
    const{data,isFetching,error}=useGetSongByCountryQuery(country)
    const[loading,setLoading]=useState(true)
    const {isPlaying,activeSong}=useSelector((state)=>state.player)

    useEffect(()=>{
        axios
        .get(`https://geo.ipify.org/api/v2/country?apiKey=at_VfyiDj0kuYJE8mGNdzv9PrysLZncd&ipAddress=8.8.8.8`)
        .then((res) => setCountry(res?.data?.location.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    },[country])

    if(loading && isFetching) return <Loader title="Loading songs around you...."/>
    if(error && country !== '') return <Error/>

    return(
        <div className='flex flex-col'>
              <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{country}</span></h2>
                <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                    {
                        data?.map((song,i)=>(
                            <SongCard
                                key={song.key}
                                i={i}
                                song={song}
                                data={data}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                            />
                        ))
                    }
                </div>
        </div>
    )
} 

export default CountryTracks;
