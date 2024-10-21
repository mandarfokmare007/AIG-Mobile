import React from "react";
import close from "../../assests/images/Close.png";
import image20 from "../../assests/images/image 20.png";
import "./Report.scss";


const Report: React.FC = (): JSX.Element => {
    return (
        <div className="my-bills">
            <div className="div">
                <div className="text-wrapper">Bill Details</div>

                <img className="image" alt="Bill Preview" src={image20} />

                <div className="text-wrapper-2">Share</div>

                <button className="download-button">Download</button>
                
                <img className="close" alt="Close" src={close} />
            </div>
        </div>
    );
};

export default Report;
