import React, { useState } from 'react'
import useGif from '../useGif'

function Tag2() {
    const [tag,setTag] = useState('dogs')
    const {gif,getRandomGifs} = useGif(tag)

    return (
        <div className="container">
        <h1>Random {tag} Gif</h1>
        <img width={480} src={gif}  alt={`Random ${tag} Gif`}/>
        <input type="text" value={tag} onChange={e=>setTag(e.target.value)} />
        <button onClick={e => getRandomGifs()}>CLICK FOR NEW</button>
    </div>
    )
}

export default Tag2
