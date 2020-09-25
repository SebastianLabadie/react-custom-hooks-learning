import React, { useEffect, useState } from 'react'
import axios from 'axios'



const API_KEY = process.env.REACT_APP_API_KEY;

function Tag() {
    const [tag,setTag] = useState('dogs')
    const [gif,setGif] = useState('')


    const getRandomGifs= async()=>{
        const res=await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`)
       
        const imageSrc=res.data.data.images.downsized_large.url

        setGif(imageSrc)
    }
    useEffect(()=>{
        getRandomGifs(tag)
    },[tag])

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width={480} src={gif}  alt={`Random ${tag} Gif`}/>
            <input type="text" value={tag} onChange={e=>setTag(e.target.value)} />
            <button onClick={e => getRandomGifs()}>CLICK FOR NEW</button>
        </div>
    )
}

export default Tag
