import React, { useState } from 'react';
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'

const StudioSection = () => {
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setLightboxActive(true);
  };

  const handleLightboxClick = () => {
    setLightboxActive(false);
  };

  return (
    <div className="section-container">
      <h1>Tekintse meg stúdiónkat</h1>
      <div className="card-container">
        <div className="card">
          <img
            src={card1}
            className="image"
            alt="studio1"
            onClick={() => handleImageClick(card1)}
          />
        </div>
        <div className="card">
          <img
            src={card2}
            className="image"
            alt="studio2"
            onClick={() => handleImageClick(card2)}
          />
        </div>
        <div className="card">
          <img
            src={card3}
            className="image"
            alt="studio3"
            onClick={() => handleImageClick(card3)}
          />
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxActive && (
        <div className="lightbox active" onClick={handleLightboxClick}>
          <img src={currentImage} alt="Magnified" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default StudioSection;
