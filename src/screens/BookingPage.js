import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './BookingPage.css';
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {IoIosArrowBack} from "react-icons/io"




function BookingPage() {

    var fname="";
    var lname="";
    var mail="";

    const navigate = useNavigate();
    if(window.localStorage.getItem('first_name')!=undefined){
        fname=window.localStorage.getItem("first_name").substring(1, window.localStorage.getItem("first_name").length-1)

        lname=window.localStorage.getItem("last_name").substring(1, window.localStorage.getItem("last_name").length-1)
    
        mail=window.localStorage.getItem("email").substring(1, window.localStorage.getItem("email").length-1)
    }
   

    const [first_name,setFirst_name]=useState('');
    const [last_name,setLast_name]=useState('');
    const [email,setEmail]=useState('');
    const [booked,setBooked]=useState(0);

    

    const movie_image=window.localStorage.getItem("movie_image").substring(1, window.localStorage.getItem("movie_image").length-1)

    const movie_name= window.localStorage.getItem("movie_name").substring(1, window.localStorage.getItem("movie_name").length-1)

    useEffect(()=>{
      setFirst_name(fname)
      setLast_name(lname)
      setEmail(mail)
    },[])


       function completebooking(){
        window.localStorage.setItem("first_name", JSON.stringify(first_name))
      window.localStorage.setItem("last_name",JSON.stringify(last_name));
      window.localStorage.setItem("email",JSON.stringify(email));

      setBooked(1);
       }


  return (<div>
    <IoIosArrowBack className='back_btn_full' onClick={() => navigate(-1)}/>
    
     <div className='full_screen_movie'>

    <div className='movie_area'>
        <div className='movie_images'>
        
        <img src={movie_image} style={{height:300,width:'auto',marginTop:120}}></img>

        </div>
        <div className='movie_form'>
        <div style={{marginTop:30,fontSize:30,position:'absolute',marginLeft:150}}>{movie_name}</div>

        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch'},
      }}
      noValidate
      autoComplete="off"
    >
     <TextField value= {first_name} onChange={event => setFirst_name(event.target.value)} style={{marginTop:100}} id="outlined-basic" type="text" label="First Name" variant="outlined" />
      <TextField value= {last_name} onChange={event => setLast_name(event.target.value)} id="outlined-basic" type="text" label="Last Name" variant="outlined" />
      <TextField value= {email} onChange={event => setEmail(event.target.value)} id="outlined-basic" type='email' label="Email" variant="outlined"/>
     
      
    </Box>
    {booked==1?(<button className='signup_button' disabled>Booked</button>):(<button className='signup_button' onClick={completebooking}>Book Now</button>)}
    
    
        </div>
    </div>
    </div>
    <div className='movie_mobile'>
    <IoIosArrowBack className='back_btn' onClick={() => navigate(-1)}/>
    <img src={movie_image}  style={{height:200,width:'auto',marginTop:60,position:'absolute',marginLeft:-80,borderRadius:10}}></img>
    <div className='mobile_signup_bars'>
    <div style={{marginTop:30,fontSize:30,marginLeft:0}}>{movie_name}</div>


    <TextField value= {first_name} id="outlined-basic" onChange={event => setFirst_name(event.target.value)} type='text' label="First Name"  variant="outlined" style={{marginTop:20,height:80,width:260}}/>
    <TextField value= {last_name} id="outlined-basic" onChange={event => setLast_name(event.target.value)} type='text' label="Last Name" variant="outlined" style={{marginTop:0,height:80,width:260}}/>
    <TextField value= {email} id="outlined-basic" onChange={event => setEmail(event.target.value)} type='email' label="Email" variant="outlined" style={{marginTop:0,height:80,width:260}}/>
      
   {booked==1?(<button className='signup_button' disabled>Booked</button>):(<button className='signup_button' onClick={completebooking}>Book Now</button>)}
    
    
    </div>
    

    </div>
    </div>
  );
}

export default BookingPage;