import React, { useState } from "react";
// import bill from "./bill.png";
import cancel from '../../assests/images/Cancel.png';
// import checkmark2 from "./checkmark-2.png";
import checkmark from "../../assests/images/Checkmark.png";
// import chevronDown1 from "./chevron-down-1.svg";
// import ellipse7 from "./ellipse-7.png";
import experiment from "../../assests/images/Experiment.png";
// import filePrescription from "./file-prescription.png";
// import forward from "./forward.png";
// import fullTestTube from "./full-test-tube.png";
import hospital from "../../assests/images/Hospital.png";
import image7 from "../../assests/images/image 7.png";
// import image from "./image.png";
// import line13 from "./line-13.svg";
// import line14 from "./line-14.svg";
import image20 from "../../assests/images/image 20.png";
import xRay from "../../assests/images/X-ray.png";
import CustomModal from "../../Components/ModalPopup";
import "./MyBills.scss";

// TypeScript React component
export const MyBills: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="my-bills">
            <div className="div">
               
                <div className="overlap-3">
                    <div className="text-wrapper-5">26</div>
                    <div className="text-wrapper-6">26</div>
                    <div className="text-wrapper-7">26</div>

                    <div className="hospital-wrapper">
                        <img className="hospital" alt="Hospital" src={hospital} />
                    </div>

                    <div className="overlap-4">
                        <div className="ellipse-2" />
                        <img className="x-ray-2" alt="X ray" src={xRay} />
                        <div className="ellipse-3" />
                        <img className="experiment" alt="Experiment" src={experiment} />
                        <img className="image" alt="Image" src={image7} />

                        <div className="rectangle" />
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />

                        <div className="text-wrapper-8">UHIDAIG.1234</div>
                        <div className="text-wrapper-9">In - Hospital Consultation</div>
                        <div className="text-wrapper-10">Invoice: #621254892</div>
                        <div className="text-wrapper-11">Dr Gautham</div>

                        <div className="overlap-wrapper">
                            <div className="overlap-5">
                                <div className="text-wrapper-12" onClick={openModal}>View Bill</div>
                            </div>
                        </div>

                        <div className="overlap-group-wrapper">
                            <div className="overlap-6">
                                <div className="text-wrapper-13">Pay Bill</div>
                            </div>
                        </div>

                        <div className="rectangle-4" />
                        <div className="text-wrapper-14">Payment Pending</div>

                        <img className="cancel" alt="Cancel" src={cancel} />

                        <div className="text-wrapper-15">UHIDAIG.1234</div>
                        <div className="text-wrapper-16">X-Ray booking</div>
                        <div className="text-wrapper-17">Invoice: #621254892</div>

                        <div className="group-2">
                            <div className="overlap-7">
                                <div className="text-wrapper-18"  onClick={openModal}>View Bill</div>
                            </div>
                        </div>

                        <div className="rectangle-5" />
                        <div className="text-wrapper-19">Payment Completed</div>
                        <img className="checkmark" alt="Checkmark" src={checkmark} />

                        <p className="complete-blood-count">
                            <span className="span">Complete</span>
                            <span className="text-wrapper-20">&nbsp;</span>
                            <span className="span">Blood Count (CBC)</span>
                        </p>

                        <div className="text-wrapper-21">Invoice: #621254892</div>

                        <div className="group-3">
                            <div className="overlap-8">
                                <div className="text-wrapper-22"  onClick={openModal}>View Bill</div>
                            </div>
                        </div>

                        <div className="rectangle-6" />
                        <div className="text-wrapper-23">Payment Completed</div>

                        <img className="checkmark-2" alt="Checkmark" src={checkmark} />

                        <div className="text-wrapper-24">UHIDAIG.1234</div>
                    </div>

                    {/* <img className="line" alt="Line" src={line13} /> */}
                    {/* <img className="line-2" alt="Line" src={line14} /> */}
                </div>

                <div className="Date">Aug 2024</div>
            </div>
            <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} image={image20} title="Bill Details"/>
        </div>
    );
};

export default MyBills;
