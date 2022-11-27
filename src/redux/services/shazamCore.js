import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi=createApi({
    reducerPath:"shazamCoreApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set( 'X-RapidAPI-Key','344a1517d1msh4b88b8f12e84e5ep10d8dfjsnf8e6876053fa')

            return headers;
        }
    }),
    endpoints:(builder) => ({
        getTopCharts:builder.query({query:()=>'/charts/world'}),
        getSongsByGenre:builder.query({query:(genre)=>`/charts/genre-world?genre_code=${genre}`}),
        getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),
        getSongRelated:builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`}),
        getArtistDetails:builder.query({query:({artistId})=>`/artists/details?artist_id=${artistId}`}),
        getSongByCountry:builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongBySearch:builder.query({query:(seacrhTerm)=>`/search/multi?search_type=SONGS_ARTISTS&query=${seacrhTerm}`})
    })
})
    
export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongByCountryQuery,
    useGetSongBySearchQuery
}=shazamCoreApi;