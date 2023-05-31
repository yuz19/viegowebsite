import React from 'react'
import leftArrow from './caret-left.svg'
import rightArrow from './caret-right.svg'

export default function BtnSlider({direction,moveSlide}){
    return(
       <div className={direction==="next" ? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide} >
            <img src={direction==="next" ? rightArrow : leftArrow}/>
       </div>
    )
}