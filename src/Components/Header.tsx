import React from 'react';
import Logo from '../assests/images/AIGLogo.png'; // Adjust the path to your logo
import '../theme/Header.scss'; // Import CSS module

const Header: React.FC = () => {
  return (
    <header className='headerContainer'>
      <div className='logoContainer'>
        <img src={Logo} alt="Logo" className='logo' />
      </div>
    </header>
  );
};

export default Header;
