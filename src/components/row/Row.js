import React,{useEffect,useState} from 'react'
import './Row.css'
import instance from '../../instance'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl}) {
    const [movies,setMovies] = useState([])
    

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
        }
      fetchData()
    
    })
   

  return (
    <div className='row'>
       <h2>{title}</h2>
       <div className='row__posters'>
            {movies.map((movie) =>(
                <img
                className='row_poster'
                alt={movie.name}
                src={`${base_url}${movie.backdrop_path}`}/>
            ))}
        </div>    
    </div>
    
  )
}

export default Row