import React from 'react'
import Logo from '../images/logo2.png'


function Header() {
  // JavaScript function to toggle the menu
  function openMenu() {
    const links = document.querySelector('.myLinks');
  
    // Toggle the display property between 'block' and 'none'
    if (links.style.display === 'block') {
      links.style.display = 'none';
    } else {
      links.style.display = 'block';
  
      // Add an event listener to detect clicks outside the menu
      document.addEventListener('click', handleOutsideClick);
    }
  }
  
  function handleOutsideClick(event) {
    const links = document.querySelector('.myLinks');
    const icon = document.querySelector('.icon');
  
    // Check if the click is outside the menu and the hamburger icon
    if (!links.contains(event.target) && !icon.contains(event.target)) {
      links.style.display = 'none';
      // Remove the event listener after hiding the menu
      document.removeEventListener('click', handleOutsideClick);
    }
  }

  const handleClick = () => {
    window.open('https://bastyamasszazsstudio.simplybook.it/v2/#book/count/1/', '_blank')
  }
  
  return (
    <div className="header-container">
        <img src={Logo} alt="logo" id='logo'/>
        <ul className='header-nav-links'>
            <li><a href="#top">Kezdőlap</a></li>
            <li><a href="#szolgaltatasok">Szolgáltatások</a></li>
            <li><a href="#elerhetoseg">Elérhetőség</a></li>
        </ul>
        <button className='button-reservation' onClick={handleClick}>Foglalás</button>
          <div className="mobile-menu">
            <a href="javascript:void(0)" className='icon' onClick={openMenu}><i className='bi bi-list'></i></a>
            <div className="myLinks">
              <a href="#top">Kezdőlap</a>
              <a href="#szolgaltatasok">Szolgáltatások</a>
              <a href="#elerhetoseg">Elérhetőség</a>
              <a href="https://bastyamasszazsstudio.simplybook.it/v2/#book/count/1/" target='_blank'>Foglalás</a>
            </div>
        </div>
    </div>
  )
}

export default Header