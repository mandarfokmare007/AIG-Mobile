import backIcon from '../assests/icons/Forward.svg';
import chevronIcon from '../assests/icons/chevron-down.svg';
import patientPic from '../assests/images/patientPic.png';
import './HeaderWithPatientInfo.scss';
const HeaderWithPatientInfo = ({title,patientInfo}:any) => {
    patientInfo = {
        name:"Manjunath",
        id:"UHIDAIG.1234"
    }
  return (
  <>
  <div className="HeaderContainer">
    <div className='titleContainer'><img src={backIcon}></img><h4>{title}</h4></div>
    <div className='patientCard'>
        <div className='patientImg'>
        <img src={patientPic}></img>
        <div className='patientName'>
            <span className='name'>{patientInfo.name}</span>
            <span className='id'>{patientInfo.id}</span>
        </div>
        </div>
        <div>
        <img src={chevronIcon}></img>
        </div>
    </div>
  </div>
  </>
  )
}

export default HeaderWithPatientInfo