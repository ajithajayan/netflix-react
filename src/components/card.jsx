import axios from "../axios/axios";
import React, { useState, useEffect } from "react";
import { image_url, API_KEY } from "../constants/constants";
import YouTube from 'react-youtube';



function Card(props) {
  const [movies, setMovies] = useState([]);
  const [url,setUrl] =useState('')

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data.results);
        console.log(response.data.results[0])
        setMovies(response.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function getMovie(id){

    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
        console.log(response.data.results[0]);
        if(response.data.results.length!=0){
            setUrl(response.data.results[0].key)
        }else{
            console.log("array is empty");
        }
        
    }).catch((e)=>{
        console.log(e);
    })

  }

  return (
    <div className="location" id="home">
      <h1 id="home">{props.title}</h1>
      <div className="box">
        {movies.map((obj) => (
          <a>
            <img
              onClick={()=>{getMovie(obj.id)}} 
              key={obj.id}
              src={`${image_url}${obj.backdrop_path}`}
              alt=""
            />
         </a>
        ))}

      </div>
     {url && <YouTube videoId={url} opts={opts} />}
    </div>
  );
}

export default Card;
