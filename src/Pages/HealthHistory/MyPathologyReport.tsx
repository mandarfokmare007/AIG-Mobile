import { useState } from "react";
// import bill from "./bill.png";

import experiment from "../../assests/images/Experiment.png";
import hospital from "../../assests/images/Hospital.png";
// import line16 from "./line-16.svg";
// import line17 from "./line-17.svg";
import image from "../../assests/images/Full Body MRI - Sample Report_page-0001 1.png";
import xRay from "../../assests/images/X-ray.png";
import CustomModal from "../../Components/ModalPopup";
import "./MyPathologyReport.scss";


 const MyPathology = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="my-pathology">
            <div className="div">
            
                <div className="Date">Aug 2024</div>

                <div className="overlap-3">
                    <div className="text-wrapper-6">UHIDAIG.1234</div>

                    <div className="chest-CT-scan"> Chest CT Scan</div>

                    <div className="text-wrapper-7">Invoice: #621254892</div>

                    <div className="text-wrapper-8">Dr Gautham</div>

                    <div className="overlap-wrapper">
                        <div className="overlap-4">
                            <div className="text-wrapper-9" onClick={openModal}>View Report</div>
                        </div>
                    </div>
                </div>

                <div className="overlap-5">
                    <div className="text-wrapper-6">UHIDAIG.1234</div>

                    <div className="text-wrapper-10">MRI Scan</div>

                    <div className="text-wrapper-11">Invoice: #621254892</div>

                    <div className="overlap-group-wrapper">
                        <div className="overlap-4">
                            <div className="text-wrapper-12" onClick={openModal}>View Report</div>
                        </div>
                    </div>
                </div>

                <div className="overlap-6">
                    <div className="text-wrapper-6">UHIDAIG.1234</div>

                    <div className="text-wrapper-10">MRI Scan</div>

                    <div className="text-wrapper-11">Invoice: #621254892</div>

                    <div className="group-2">
                        <div className="overlap-4">
                            <div className="text-wrapper-9" onClick={openModal}>View Report</div>
                        </div>
                    </div>
                </div>

                <div className="text-wrapper-13">26</div>

                <div className="text-wrapper-14">26</div>

                <div className="text-wrapper-15">26</div>

                <div className="hospital-wrapper">
                    <img className="hospital" alt="Hospital" src={hospital} />
                </div>

                <div className="x-ray-wrapper">
                    <img className="img-2" alt="X ray" src={xRay} />
                </div>

                <div className="experiment-wrapper">
                    <img className="img-2" alt="Experiment" src={experiment} />
                </div>
{/* 
                <img className="line" alt="Line" src={line16} />

                <img className="line-2" alt="Line" src={line17} /> */}
            </div>
            <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} image={image} title="Report Details"/>
        </div>
    );
};

export default MyPathology;