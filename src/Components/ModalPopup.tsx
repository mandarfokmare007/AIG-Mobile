import Modal from "react-modal";
import closeImage from "../assests/icons/close.svg";

import "./ModalPopup.scss";

// Set the root element for accessibility (important for React-Modal)
Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose ,title,image}: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div className="div">
        <div className="flex justify-content-space-between">
          <div className="text-wrapper">{title}</div>
          <img className="close" alt="Close"  onClick={onRequestClose} src={closeImage} />
        </div>
        <div className="float-right share">Share</div>
        <img className="reportImage" alt="Image" src={image} />

        <button className="float-right Btn">Download</button>
      </div>
     
    </Modal>
  );
};

export default CustomModal;
