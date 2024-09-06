import React from 'react'
import Kep from '../images/Masseur1.png'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-intro-container">
        <h1 className='header-h1'>Üdvözöljük a Bástya Masszázsnál</h1>
        <p className='hero-introduction'>Kiss Zoltán Károly vagyok, ex-katona és szenvedélyes masszőr. Katonai szolgálatom alatt kezdtem el masszírozni a táborokban, ahol gyorsan rájöttem, hogy mennyire élvezem ezt a tevékenységet. Számomra a masszázs nem csupán munka, hanem a kikapcsolódás és a gyógyítás eszköze.</p>
      </div>
        <img src={Kep} alt="Masszőr" id='hero-img' />
    </div>
  )
}

export default Hero