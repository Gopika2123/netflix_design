import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../Baseurl'
import './Banner.css'


function Banner({fetchurl}) {

    //movie states
    const [Movie,setMovies]=useState([])

    async function fetchData(){
    const result=await instance.get(fetchurl)
    // console.log(result);
    console.log(result.data.results);//array(20) of data
    setMovies(result.data.results[Math.floor(Math.random()*result.data.results.length-1)])
    }
    useEffect(()=>{
        fetchData();
    },[])
    const base_url = "https://image.tmdb.org/t/p/original/";
    function truncate(str, n) {
      return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

    console.log(Movie);//random movie displayed

  return (
    <div className='banner'
    style={{backgroundImage:`url(${base_url}${Movie.backdrop_path})`,
    backgroundSize:"cover",backgroundPosition:"center"
    
    }}>

<div className='banner-content'>
              <h1 className='banner-title'>{Movie.name}</h1>
              <p className='banner-des'>{truncate(Movie.overview, 100)}</p>


          </div>
          <div className="fade_bottom"> </div>

    </div>
  )
}

export default Banner