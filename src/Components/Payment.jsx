import React from 'react'
import szep from '../images/payment/szep.png'
import bank from '../images/payment/bank.png'

function Payment() {
  return (
    <div className="payment-container">
        <h1>Fizetési lehetőségek</h1>
        <div className="payment-sections">
            <div className="left-section-payment">
                <p>Üzletünkben széleskörű fizetési lehetőséggel várjuk vendégeinket</p>
                <p>"Vigyázz a testedre, ez az egyetlen hely ahol élhetsz"<br /> Jim Rhon</p>
            </div>
            <div className="right-section-payment">
                <img src={szep} alt="szepkartya" />
                <img src={bank} alt="bankkartya" />
            </div>
        </div>
    </div>
  )
}

export default Payment