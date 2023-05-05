import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


function Home() {
    const [moviedata,setMoviedata]=useState([])

    const [image,setImage]=useState([])
   
     useEffect(()=>{
       const fetchData = async ()=>{
           const result= await axios("https://api.tvmaze.com/search/shows?q=all")
           console.log(result.data)
           setMoviedata(result.data)
       } 
       fetchData();
     },[])
   
     for(var a=0;a<moviedata.length;a++){
        if(moviedata[a].show.image!=null){
            image[a]=moviedata[a].show.image.medium
        }
        else 
        image[a]="https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png"
     }
    
     const SelectMovie = (movie_id) =>{
      window.localStorage.setItem("movie_id",JSON.stringify(movie_id.show.id));
      window.localStorage.setItem("movie_name",JSON.stringify(movie_id.show.name));
      window.localStorage.setItem("movie_image",JSON.stringify(movie_id.show.image.medium));
      window.localStorage.setItem("movie_genre",JSON.stringify(movie_id.show.genres));
      window.localStorage.setItem("movie_rating",JSON.stringify(movie_id.show.rating));
      window.localStorage.setItem("movie_description",JSON.stringify(movie_id.show.summary));
      

     }
     
 

  return (
    <div>
      show time


      <div className="flexbox-layout" style={{height:200,width:'100%',display:"inline",flexDirection:"row",flexWrap:"wrap",display:'flex',justifyContent:'center',marginTop:60,}}>
       {moviedata.map((value, index)=>(
       
           <Link to="/description" style={{textDecoration:'none',color:'black'}} onClick={()=>{SelectMovie(moviedata[index])}}>
            <div style={{alignItems:'left'}}>
            <img src={image[index]} alt="Image not available" style={{height:220,width:'auto',marginLeft:10,borderRadius:5,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}></img> 

             <div style={{fontWeight:'bold',marginBottom:15}}>{moviedata[index].show.name}</div>
               
             </div> 
             </Link>
       
       ))}

      </div>

    </div>
  )
}

export default Home;
