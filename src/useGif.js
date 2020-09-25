import  { useEffect, useState } from 'react'
import axios from 'axios'



const API_KEY = process.env.REACT_APP_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

function useGif(tag) {
    const [gif,setGif] = useState('')


    const getRandomGifs= async()=>{
        const res=await axios.get(tag ? `${url}&tag=${tag}` : url)
        const imageSrc=res.data.data.images.downsized_large.url

        setGif(imageSrc)
    }

    useEffect(()=>{
        getRandomGifs(tag)
    },[tag])


    return {gif, getRandomGifs}
}

export default useGif
