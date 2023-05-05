import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Movie.css'
import './BookingPage.css'
import {IoIosArrowBack} from "react-icons/io"
import { useNavigate } from 'react-router-dom';

function Movie() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [moviedata,setMoviedata]=useState([])
    const [image,setImage]=useState('')
    const [printdata,setPrintdata]=useState([])
    const movie_id=window.localStorage.getItem("movie_id").substring(1, window.localStorage.getItem("movie_id").length-1)

    const movie_image=window.localStorage.getItem("movie_image").substring(1, window.localStorage.getItem("movie_image").length-1)

    const movie_name= window.localStorage.getItem("movie_name").substring(1, window.localStorage.getItem("movie_name").length-1)

    const movie_genre=window.localStorage.getItem("movie_genre").substring(1, window.localStorage.getItem("movie_genre").length-1)

    const movie_rating=window.localStorage.getItem("movie_rating").substring(1, window.localStorage.getItem("movie_rating").length-1).replace(/<[^>]*"">/g,' ')

    const movie_description=window.localStorage.getItem("movie_description").substring(1, window.localStorage.getItem("movie_description").length-1).replace(/<[^>]*>/g,' ')

console.log(movie_id)
console.log(movie_name)
console.log(movie_image)
console.log(movie_id)

    
    
   
  return (
    <div>
        <div className='desktop_view_'>
        <IoIosArrowBack className='back_btn_full' onClick={() => navigate(-1)} style={{position:'fixed'}}/>
        <div style={{height:300,width:'100%', background:'linear-gradient(to bottom,#FF024B,#C8003A,#A3002F,#780023,#470015,#000000)'}}/>

        <div className='content_'> 
        <div className='image_'>
            <img className="imgg_" src={movie_image}></img>
        </div>


        <div className='details_'>
            <div className='movie_name_' style={{textAlign:'left'}}>{movie_name}</div>
            <div className='movie_rating_'>{movie_rating}</div>
            <div className='genre_'>Genre: {movie_genre}</div>
            <Link to="/booking" style={{textDecoration:'none',color:'black'}}><div className='book_now_'>Book Now</div>
            </Link>
        </div>
        
        <h3 className='description_h'>Description</h3>
        <div className='description_'>{movie_description} </div>

        </div>
        </div>

        <div className='mobile_view_'>
        <IoIosArrowBack className='back_btn_full' onClick={() => navigate(-1)} style={{position:'fixed'}}/>
        <div style={{height:200,width:'100%', background:'linear-gradient(to bottom,#FF024B,#C8003A,#A3002F,#780023,#470015,#000000)'}}/>
        <div className='mobile_content_'> 
        <div className='mobile_image_'>
            <img className="mobile_imgg_" src={movie_image}></img>
        </div>
        <div className='mobile_details_'>
            <div className='mobile_movie_name_' >{movie_name}</div>
            <div className='mobile_movie_rating_'>Rating: {movie_rating}</div>
            <div className='mobile_genre_'>Genre: {movie_genre}</div>
            <Link to="/booking">
            <button style={{background:'orange',padding:10,textDecoration:'none',outline:'none',border:'none',marginTop:10,borderRadius:5,fontWeight:'bold'}}>Book Now</button>
            </Link>
        </div>

        <h3>Description</h3>
        {movie_description}
        </div>
        </div>
    </div>
  )
}

export default Movie
