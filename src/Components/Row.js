import React, { useEffect } from 'react'
import { useState } from 'react'
import instance from '../Baseurl'
import './Row.css'

function Row({ isLargeRow,title,fetchurl}) {
    //movie states
    const [Movies,setMovies]=useState([])

    async function fetchData(){
    const result=await instance.get(fetchurl)
    // console.log(result);
    console.log(result.data.results);//array(20) of data
    setMovies(result.data.results)
    }
    useEffect(()=>{
        fetchData();
    },[])
    const base_url = "https://image.tmdb.org/t/p/original/";

    console.log(Movies);

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movies'>
            {
                Movies.map(movie=>(
                    <img className={`movie ${isLargeRow && "largeMovie"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}/>
                )
                )
            }
        </div>
    </div>
  )
}

export default Row

