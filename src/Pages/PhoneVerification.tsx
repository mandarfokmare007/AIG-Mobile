import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../theme/PhoneVerification.scss'; // Import your CSS file

const countryCodes = [
  { code: '+1', country: 'USA' },
  { code: '+91', country: 'India' },
  { code: '+44', country: 'UK' },
  // Add more country codes as needed
];

const PhoneVerification= () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(countryCodes[0].code);
  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds

  const handleGetCode = () => {
    setIsOtpScreen(true);
    setTimer(180); // Reset timer when going to OTP screen
  };

  useEffect(() => {
    let interval:any;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [timer]);

  return (
    <div className="verification-container">
      {isOtpScreen ? (
        <OtpVerification phoneNumber={`${countryCode} ${phoneNumber}`} timer={timer} />
      ) : (
        <>
          <h2 className="phone-verification-title">Verify your phone number</h2>
          <p className="phone-verification-text">
            We will send you  an<strong> One Time Password (OTP)</strong> to this mobile number
          </p>
          <div className="phone-input-container">
            <label className="phone-number-label">Enter mobile no.* </label>
            <div className="input-container">
              <div className="country-code-container">
                <select 
                  value={countryCode} 
                  onChange={(e) => setCountryCode(e.target.value)} 
                  className="country-code-select"
                >
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Mobile number"
                className="phone-input"
              />
            </div>
          </div>
          <button className="get-code-button" onClick={handleGetCode}>
            Get Code
          </button>
        </>
      )}
    </div>
  );
};

// /

const OtpVerification = ({ phoneNumber, timer }:any) => {
  const [otp, setOtp] = useState(['', '', '', '']); // 4 boxes for OTP input
  const inputRefs = useRef<any>([]);

  const handleChange = (index: number, value: string | any[]) => {
    if (value.length <= 1) {
      const newOtp:any = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const history = useNavigate();
  
  const handleSubmit = () => {
    history('/mpin'); 
  };

  const formatTime = (time:any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleResend = () => {
    // Logic to handle resending the OTP can be added here
    alert('OTP resent!');
  };

  return (
    <div className="otp-container">
      <h2 className="otp-title">OTP Verification</h2>
      <h3 className="otp-verification-title">Enter the code from the SMS we sent to</h3>
      <p className="otp-phone-number"><strong>{phoneNumber}</strong></p>
      <div className="timer">{formatTime(timer)}</div>
      <div className="otp-input-container">
        {otp.map((value, index) => (
          <input
            key={index}
            id={`otp-input-${index + 1}`}
            type="tel"  // Use 'tel' instead of 'text'
            pattern="[0-9]*"  // Ensures only numbers are allowed
            inputMode="numeric"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="otp-input"
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)} 
          />
        ))}
      </div>
      <p className="resend-text">
        I didnt receive any code? <span className="resend-link" onClick={handleResend}>Resend</span>
      </p>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default PhoneVerification;
