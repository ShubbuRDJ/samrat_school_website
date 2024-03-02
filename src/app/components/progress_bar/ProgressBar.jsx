import { Grid } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import './progressBar.scss';

export default function ProgressBar({countLimit,delayInMs}) {
    const progressBoxRef = useRef(null);
    const progressTxtRef = useRef(null);
    let count = 0;
    useEffect(()=>{
      const progressInterval =  setInterval(()=>{
            count++;
            if(count <=countLimit){
                progressBoxRef.current.style.width = `${count}%`;
                progressTxtRef.current.textContent = `${count}%`;
                if(count>=50){
                    progressBoxRef.current.style.background = "radial-gradient(100% 100% at 100% 0,#8caa88 0,#49ed1c 100%)";
                }
            }
            else{
                clearInterval(progressInterval);
            }
        },delayInMs)
    // eslint-disable-next-line
    },[])
  return (
    <Grid id='progress-bar-container'>
        <Grid ref = {progressBoxRef} id='progress-bar-main'>
            
        </Grid>
        <span ref={progressTxtRef} id='progress-bar-text'></span>
    </Grid>
  )
}
