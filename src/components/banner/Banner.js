import React,{useState,useEffect} from 'react'
import instance from '../../instance'
import requests from '../../request'
import './Banner.css'

function Banner() {
    const[movies,setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length)])
        }
      fetchData()
    },[])

    function Tr(str,n){
        return str?.length > n ? str.substr(0,n-1) + "....." :str
    }
console.log(movies);
  return (
   <header 
   className='banner'
   style={{backgroundSize:"cover",
   backgroundImage:`url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})`,
   backgroundPosition:"center center"
   }}>

    <div className='banner_contents'>
      <h1 className='banner_title'>
        {movies.title || movies.name || movies.original_name}
      </h1>
      <div className='banner_buttons'>
        <button className='banner__button'>Play</button>
        <button className='banner__button'>More Info</button>
      </div>
      <h1 className='banner_description'>
            {Tr(movies.overview,150)}
       </h1>
    </div>
       <div className='fade_bottom'></div>  
   </header>
   
  )
}
export default Banner