import Logo from '../assests/images/AIGLogo.png';
import '../theme/Login.scss';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate ();

   const handleLogin = () => {
    history('/phoneVerification'); 
  };

  return (
    <div className="login-container">
      <div className="logo-container">
       <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="login-background">
      </div>

      <div className="button-container">
        <p className="access-account-message">Login to access your account</p> 
        <button className="login-button" onClick={handleLogin}>Login</button>
        <button className="guest-button" onClick={handleLogin}>Continue as Guest</button>
      </div>
    </div>
  );
};

export default Login;
