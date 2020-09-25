import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;
function Random() {
    const [gif,setGif] = useState('')


    const getRandomGifs= async()=>{
        const res=await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
       
        const imageSrc=res.data.data.images.downsized_large.url

        setGif(imageSrc)
    }
    useEffect(()=>{
        getRandomGifs()
    },[])

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width={480} src={gif}  alt="Random Gif"/>
            <button onClick={e => getRandomGifs()}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random
