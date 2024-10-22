// src/components/Header.js
import cartLogo from '../assests/icons/cart.svg';
import AIGLogo from '../assests/images/AIGLogo.png';
import './HeaderWithSearch.scss';


export const HeaderWithSearch = () => (
    <header className="header-container">
        <div className='logoSection'>
        <h1 className="logo">
      <img src={AIGLogo}></img>
    </h1>
    <div className='cart'>
      <img src={cartLogo}></img>
    </div>
        </div>
   
    <div className="search-bar">
      <input className="search-input" placeholder="symptoms, diseases..." />
      <button className="search-button">Search</button>
    </div>

  </header>
);
