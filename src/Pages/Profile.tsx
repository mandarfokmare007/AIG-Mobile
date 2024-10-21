import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import languageIcon from '../assests/images/multilanguage.png';
import '../theme/Profile.scss'; // Import your CSS for styling

const Profile= () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  // Sample data for language options and AIG branches
  const languages = ['English', 'Spanish', 'French', 'German'];
  const branches = ['Branch A (City 1)', 'Branch B (City 2)', 'Branch C (City 3)'];

  const handleLanguageChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedLanguage(event.target.value);
  };

  const handleBranchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedBranch(event.target.value);
  };
  const navigate = useNavigate();
  const handleNext = () => {
    // alert(`Selected Language: ${selectedLanguage}\nSelected Branch: ${selectedBranch}`);
    // Logic for next action can be added here
    navigate('/home')
  };

  return (
    <div className="profile-container">
      {/* Section 1: Language Selection */}
      <div className="language-section">
        <img src={languageIcon} alt="Multilanguage Icon" className="language-icon" />
        
        <p className="preferred-language-text">Choose your preferred language</p>
        <p className="language-text">Please select your language</p>
        
        <select value={selectedLanguage} onChange={handleLanguageChange} className="language-dropdown">
          <option value="" disabled>Select Language</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>{language}</option>
          ))}
        </select>
      </div>

      {/* Section 2: AIG Hospital Branch Selection */}
      <div className="branch-section">
        <h3 className="branch-title">Select AIG Hospital Branch</h3>
        {/* <label className="branch-label">Select your nearest AIG branch:</label> */}
        <select value={selectedBranch} onChange={handleBranchChange} className="branch-dropdown">
          <option value="" disabled>Select your nearest AIG branch </option>
          {branches.map((branch, index) => (
            <option key={index} value={branch}>{branch}</option>
          ))}
        </select>
      </div>
        <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Profile;
