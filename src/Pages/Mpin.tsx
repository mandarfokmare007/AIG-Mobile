import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../theme/Mpin.scss';

import successIcon from '../assests/images/mpin-icon.png'; // Update the path as necessary

const Mpin = () => {

  const [mpin, setMpin] = useState(['', '', '', '']);
  const [confirmMpin, setConfirmMpin] = useState(['', '', '', '']);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRefs1 = useRef<any>([]); // Refs for MPIN inputs
  const inputRefs2 = useRef<any>([]); 
  const handleChange = (index:any, value:any, isConfirm:any) => {
    if (value.length <= 1) {
      const newMpin:any = isConfirm ? [...confirmMpin] : [...mpin];
      newMpin[index] = value;

      if (isConfirm) {
        setConfirmMpin(newMpin);
        if (value && index < confirmMpin.length - 1) {
          inputRefs2.current[index + 1].focus(); // Move to next Confirm MPIN input
        }
      } else {
        setMpin(newMpin);
        if (value && index < mpin.length - 1) {
          inputRefs1.current[index + 1].focus(); // Move to next MPIN input
        }
      }
     
    }
  };

  const history = useNavigate();

  const handleSubmit = () => {
    const mpinCode = mpin.join('');
    const confirmCode = confirmMpin.join('');
    if (mpinCode === confirmCode) {
      setIsModalOpen(true); // Open the modal
    } else {
      alert('MPINs do not match. Please try again.');
    }

    history('/profile'); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleNext = () => {
    // Logic for next action
    alert('Next action'); // Replace this with your desired action
    handleCloseModal(); // Close modal after next action
  };

  return (
    <div className="mpin-container">
      <h2 className="mpin-title">Enter mPIN</h2>
      <p className="mpin-instruction">Set up a 4-digit MPIN for quick access</p>
      <div className="mpin-input-container">
        {mpin.map((value, index) => (
          <input
            key={index}
            id={`mpin-input-${index + 1}`}
            type="tel"  // Use 'tel' instead of 'text'
  pattern="[0-9]*"  // Ensures only numbers are allowed
  inputMode="numeric"
            value={value}
            onChange={(e) => handleChange(index, e.target.value, false)}
            className="mpin-input"
            maxLength={1}
            ref={(el) => (inputRefs1.current[index] = el)}
          />
        ))}
      </div>
      <p className="mpin-instruction">Confirm pin with the same boxes</p>
      <div className="mpin-input-container">
        {confirmMpin.map((value, index) => (
          <input
            key={index}
            id={`confirm-input-${index + 1}`}
            type="tel"  // Use 'tel' instead of 'text'
            pattern="[0-9]*"  // Ensures only numbers are allowed
            inputMode="numeric"
            value={value}
            onChange={(e) => handleChange(index, e.target.value, true)}
            className="mpin-input"
            maxLength={1}
            ref={(el) => (inputRefs2.current[index] = el)} 
          />
        ))}
      </div>
      <button className="confirm-mpin-button" onClick={handleSubmit}>
        Confirm mPIN
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <img src={successIcon} alt="Success Icon" className="modal-icon" />
            <p className="modal-message"><strong>Your mPIN has been set successfully</strong></p>
            <button className="next-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mpin;
