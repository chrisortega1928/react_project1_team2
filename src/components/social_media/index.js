import React from 'react';


const SocialMedia= () => {
    return (
        <nav className='socialmedia_icon'>
            <p>Follow us on </p>
            <a class='smid' href="https://www.facebook.com/olympics/" target="_blank" > <i class="bi bi-facebook"></i></a>    
            <a class='smid' href="https://twitter.com/Olympics"  target="_blank"> <i class="bi bi-twitter"></i></a>    
            <a class='smid' href="https://www.instagram.com/Olympics/"  target="_blank"> <i class="bi bi-instagram"></i></a>    
            <a class='smid' href="https://www.snapchat.com/add/olympics"  target="_blank"> <i class="bi bi-snapchat"></i></a>
            <a class='smid' href="https://www.youtube.com/olympics"  target="_blank"> <i class="bi bi-youtube"></i></a>         
        </nav>
    )
};
export default SocialMedia;