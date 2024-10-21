// import bill from "./bill.png";
// import ellipse7 from "./ellipse-7.png";
// import filePrescription from "./file-prescription.svg";
// import forward from "./forward.png";
// import fullTestTube from "./full-test-tube.png";
// import image7 from "./image-7.png";
// import image from "./image.svg";
// import line16 from "./line-16.svg";
// import line17 from "./line-17.svg";
import calender from "../../assests/icons/calender.svg";
import "./MyPrescription.scss";
// import vector3 from "./vector-3.svg";
// import xRay from "./x-ray.png";

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
                    <button>View Prescription</button>
                  </div>
                {/* </div> */}
              
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
