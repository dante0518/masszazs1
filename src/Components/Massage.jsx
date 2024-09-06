import React from 'react'
import {
    Back,
    Head,
    Feet,
    Madero,
    Lymph,
    Aroma,
    Cupping,
    Lava,
  } from '../images/icons';

function Massage() {
  return (
    <div className="massage-container">
        <h1>Kínálatunk</h1>
        <div className="massage-card-container">
            <div className="massage-card">
                <img src={Back} alt="hát" />
                <p>Svéd masszázs</p>
            </div>
            <div className="massage-card">
                <img src={Head} alt="hát" />
                <p>Indiai fej masszázs</p>
            </div>
            <div className="massage-card">
                <img src={Feet} alt="hát" />
                <p>Reflexzónás talpmasszázs</p>
            </div>
            <div className="massage-card">
                <img src={Lymph} alt="hát" />
                <p>Nyirokmasszázs</p>
            </div>
            <div className="massage-card">
                <img src={Aroma} alt="hát" />
                <p>Aromaterápiás masszázs</p>
            </div>
            <div className="massage-card">
                <img src={Cupping} alt="hát" />
                <p>Köpölyözés</p>
            </div>
            <div className="massage-card">
                <img src={Lava} alt="hát" />
                <p>Lávaköves masszázs</p>
            </div>
            <div className="massage-card">
                <img src={Madero} alt="hát" />
                <p>Madero</p>
            </div>
        </div>

    </div>
  )
}

export default Massage