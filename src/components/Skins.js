import React, { useState } from 'react';
import DataSkins from './DataSkins';
import BtnSlider from './BtnSlider';

function Skins({ h1Color, setH1Color }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    setH1Color("blue");

    if (slideIndex !== DataSkins.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSkins.length) {
      setH1Color("vert");
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    setH1Color("vert");

    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setH1Color("blue");
      setSlideIndex(DataSkins.length);
    }
  };

  const selectedSlide = DataSkins[slideIndex - 1];

  return (
    <div className="Skins">
      <div className='ListeSkins'>
        <div className='slider' style={{ boxShadow: `15px -15px 0px 1px ${h1Color}` }}>
          {DataSkins.map((obj, index) => (
            <div className={slideIndex === index + 1 ? `infoSkin active ${obj.Name}` : `infoSkin ${obj.Name}`} key={obj.id}>
              <img src={process.env.PUBLIC_URL + `/Skins/img${index + 1}.jpg`} alt='' />
              <p>Relase Date: {obj.ReleaseDate}</p>
            </div>
          ))}
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} h1Color={h1Color} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} h1Color={h1Color} />
      </div>
      <div className='desc'>
        <p>{selectedSlide.Description}</p>
      </div>
    </div>
  );
}

export default Skins;
