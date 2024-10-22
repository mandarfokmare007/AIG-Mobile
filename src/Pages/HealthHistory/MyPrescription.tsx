
import { useState } from "react";
import calender from "../../assests/icons/calender.svg";
import image20 from "../../assests/images/image 20.png";
import CustomModal from "../../Components/ModalPopup";
import "./MyPrescription.scss";

export const MyPrescription = (): JSX.Element => {
  const data = [
    {
      prescribedBy: "Dr. R Prasada Reddy",
      id: "AIG.13542",
      visitId: "657899",
      OP: "OP: AIGG.200",
      date: "25",
    },
    {
      prescribedBy: "Dr. R Prasada Reddy",
      id: "AIG.13542",
      visitId: "657899",
      OP: "OP: AIGG.200",
      date: "26",
    },
    {
      prescribedBy: "Dr. R Prasada Reddy",
      id: "AIG.13542",
      visitId: "657899",
      OP: "OP: AIGG.200",
      date: "27",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="my-precrtiption">
      <div className="Date">Aug 2024</div>

      {data.map((e: any) => {
        return (
          <>
            <div className="container">
              <div className="flex">
                <img className="line" alt="Line" src={calender} />
                {e.date} <div className="vertical-line"></div>
              </div>
              <div className="card">
                <div className="opId">{e.OP}</div>
                {/* <div className="flex-row"> */}
                <div className="ps-2">
                  <div className="m-1">
                    <span className="text-bold">Prescribed By: </span>
                    <span className="text-wrapper">{e.prescribedBy}</span>
                  </div>
                  <div className="m-1">
                    <span className="text-bold">Prescribed ID: </span>
                    <span className="text-bold">{e.id}</span>
                  </div>
                  <div className="m-1">
                     <span className="text-wrapper">Visit ID: </span>
                    <span className="text-wrapper">{e.visitId}</span>
                  </div>
                </div>
                  <div className="Btn">
                    <button onClick={openModal}>View Prescription</button>
                  </div>
                {/* </div> */}
              
              </div>
            </div>
          </>
        );
      })}
           <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} image={image20} title="Prescription"/>
    </div>

  );
};
