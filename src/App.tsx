import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomeScreen';
import Login from './Pages/Login';
import Mpin from './Pages/Mpin';
import PhoneVerification from './Pages/PhoneVerification';
import Profile from './Pages/Profile';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<Login />} />
      <Route path="/phoneVerification" element={<PhoneVerification />} />
      <Route path="/mpin" element={<Mpin />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
  );
}

export default App;
