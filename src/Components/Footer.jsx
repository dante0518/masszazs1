import React from 'react'

function Footer() {
  return (
    <div class="socials-container">
        <div class="social-media">
            <a href=""><i class="bi bi-facebook"></i>Facebook</a>
            <a href=""><i class="bi bi-tiktok"></i>TikTok</a>
            <a href=""><i class="bi bi-instagram"></i>Instagram</a>
        </div>
        <div class="contact-container">
            <ul>
                <li>Email: bastyamasszazs@gmail.com</li>
                <li>Magyarország, Debrecen</li>
            </ul>
        </div>
        <footer className='footer-container'>
            <p>Minden jog fenntartva &copy; Bástya Masszázs, {new Date().getFullYear()}</p>
        </footer>
    </div>
  )
}

export default Footer