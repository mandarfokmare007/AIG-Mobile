import { useState } from "react";
import HeaderWithPatientInfo from "../../Components/HeaderWithPatientInfo";
import billIcon from "../../assests/icons/Bill.svg";
import billIconDark from "../../assests/icons/BillDark.svg";
import filePrescriptionDark from "../../assests/icons/File Prescription Dark.svg";
import filePrescription from "../../assests/icons/File Prescription.svg";
import testTubeDark from "../../assests/icons/Full Test Tube Dark.svg";
import testTube from "../../assests/icons/Full Test Tube.svg";
import xray from "../../assests/icons/X-ray.svg";
import xrayDark from "../../assests/icons/X-rayDark.svg";
import "./HealthHistory.scss";
import MyBills from "./MyBills";
import MyPathology from "./MyPathologyReport";
import { MyPrescription } from "./MyPrescription";
const HealthHistory = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { id: 1, label: 'My Prescription', icon: filePrescription, iconDark: filePrescriptionDark },
    { id: 2, label: 'My Bill', icon: billIcon, iconDark: billIconDark },
    { id: 3, label: 'Lab Reports', icon: testTube, iconDark: testTubeDark },
    { id: 4, label: 'Radiology', icon: xray, iconDark: xrayDark },
  ];

  const handleTabClick = (id:any) => {
    setSelectedTab(id);
  };
  return (
    <div>
      <HeaderWithPatientInfo title="My Health History" />
      <div className="healthHistory">
        <section className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${selectedTab === tab.id ? "selected" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <img
              className="tab-icon"
              alt={tab.label}
              src={selectedTab === tab.id ? tab.iconDark : tab.icon}
            />
            {selectedTab === tab.id && <span className="tab-label">{tab.label}</span>}
          </div>
        ))}
        </section>
        <div>
          {selectedTab==1&&<MyPrescription></MyPrescription>}
          {selectedTab==2&&<MyBills></MyBills>}
          {selectedTab==4&&<MyPathology></MyPathology>}
        </div>
      </div>
    </div>
  );
};

export default HealthHistory;
