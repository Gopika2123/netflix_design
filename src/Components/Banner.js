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

    console.log(Movie);//random movie displayed

  return (
    <div className='banner'
    style={{backgroundImage:`url(${base_url}${Movie.backdrop_path})`,
    backgroundSize:"cover",backgroundPosition:"center"
    
    }}>

     <div className='banner_contenst'>
      <h1 className='banner_title'>
        {Movie?.title||Movie?.name||Movie?.original_name}
      </h1>
      
     
      </div>

    </div>
  )
}

export default Banner