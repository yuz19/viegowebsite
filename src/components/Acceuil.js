import React from 'react'
function Acceuil(){
    return(
    <div className='acceuil'>
        <h1 id='titleB'>
        <span>Ruined</span> <span>KIng</span>
        </h1>

       
        <img src={process.env.PUBLIC_URL+"./sword.png"} alt='' height={500}/>
    </div>
    )
}
export default Acceuil