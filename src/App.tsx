import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import HealthHistory from './Pages/HealthHistory/HealthHistory';
import MyBills from './Pages/HealthHistory/MyBills';
import MyPathology from './Pages/HealthHistory/MyPathologyReport';
import Report from './Pages/HealthHistory/Report';
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
      <Route path="/phone-verification" element={<PhoneVerification />} />
      <Route path="/mpin" element={<Mpin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/health-history" element={<HealthHistory />} />
      <Route path="/myBills" element={<MyBills />} />
      <Route path="/report" element={<Report />} />
      <Route path="/myPathology-Report" element={<MyPathology />} />
    </Routes>
  </Router>
  );
}

export default App;
