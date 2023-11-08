import React from 'react';
import './header.css';
const Header = () => {
    return (
        <div>
            <img class="logo-header" src="https://www.mercadona.com/estaticos/images/mercadona_logo/es/mercadona-imagotipo-color-72.png" srcset="https://www.mercadona.com/estaticos/images/mercadona_logo/es/mercadona-imagotipo-color-72.png 1x, https://www.mercadona.com/estaticos/images/mercadona_logo/es/mercadona-imagotipo-color-300.png 2x" alt="mercadona"></img>
            <div class="banner">
                <div class="banner-text">Catalogue</div>
            </div>
        </div>
    );
};
export default Header;