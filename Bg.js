import React, { useState } from 'react'
import video from "./Countdown5.mp4"
import image from "./play-button-svgrepo-com.svg"

const Background = () => {
    const[isvisible,setvisitble]=useState(true)
    const hidebutton=()=>{
        setvisitble(false)
    }
  return (
    <div>
        <div>
  <video  loop autoPlay muted  id="reel">
    <source src={video} type="video/mp4"/>
  </video>
{isvisible&&(<button onClick={hidebutton()}><img class="overlay" width="40%" src={image}/></button>  )}
</div>
    </div>
  )
}

export default Background