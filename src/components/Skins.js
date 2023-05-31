import React,{useState} from 'react'
import DataSkins from './DataSkins'
import BtnSlider from './BtnSlider'
function Skins(){
    return(
    <div className="Skins ">
           <div className='ListeSkins'>
               <div className='slider'>
                    {DataSkins.map((obj,index)=>{
                        return (
                            <div>
                                <img src={process.env.PUBLIC_URL+`/Skins/img${index + 1}.jpg`} 
                                alt=''/>
                            </div>
                        )
                    })}
               </div>
               <BtnSlider/>
               <BtnSlider/>
           </div>
    </div>
    )
}
    export default Skins