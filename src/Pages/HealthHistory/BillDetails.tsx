// import { PrimaryButton } from "./PrimaryButton";
import close from "./close.png";
import image20 from "./image-20.png";
import "./style.css";

export const MyBills = (): JSX.Element => {
    return (
        <div className="my-bills">
            <div className="div">
                <div className="text-wrapper">Bill Details</div>

                <img className="image" alt="Image" src={image20} />

                <div className="text-wrapper-2">Share</div>

                {/* <PrimaryButton
                    className="primary-button-instance"
                    divClassName="design-component-instance-node"
                    text="Download"
                /> */}
                <img className="close" alt="Close" src={close} />
            </div>
        </div>
    );
};
