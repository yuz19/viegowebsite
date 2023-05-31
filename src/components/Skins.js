import React,{useState} from 'react'
import DataSkins from './DataSkins'
import BtnSlider from './BtnSlider'
function Skins(){
    const [slideIndex,setSlideIndex]=useState(1)

    const nextSlide=()=>{

    }

    const prevSlide=()=>{

    }
    return(
    <div className="Skins ">
        
           <div className='ListeSkins'>
               <div className='slider'>
                    {DataSkins.map((obj,index)=>{
                        return (
                            <div className={`infoSkin ${obj.Name}`} key={obj.id}>
                                <img src={process.env.PUBLIC_URL + `/Skins/img${index + 1}.jpg`} alt='' />
                            </div>
                        )
                        
                    })}
                    
               </div>
               
               <BtnSlider moveSlide={nextSlide} direction={"next"}/>
               <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
           </div>
    </div>
    )
}
    export default Skins