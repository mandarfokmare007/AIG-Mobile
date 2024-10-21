import React from 'react'
import './BottomSheet.scss'
import close from '../assests/icons/close.svg';
import Tick from '../assests/icons/Tick.svg'
import UpRed from '../assests/icons/UpRed.svg'

const BottomSheet = () => {
    return (
        <div className='main'>
            <div className="main__header">
                <div className="main__header__name">
                    <p>Lipid Profile</p>
                    <span>26 June 2024</span>
                </div>
                {/* <img className='main__header__img' src={close} alt="" /> */}
            </div>
            <div className="main__line"></div>
            <div className="main__body">

                <div className="main__body__card">
                    <div className="main__body__card__left">
                        <p>Cholesterol Total</p>
                        <span>Spectrophotometry</span>
                    </div>

                    <div className="main__body__card__right">
                        <div className="main__body__card__right__direction">
                            <p>300.0</p>
                            <div className="main__body__card__right__direction__container">
                                <img src={UpRed} alt="" />
                            </div>
                        </div>
                        <p>&lt; 200.0 mg/dI</p>
                    </div>
                </div>
                <div className="main__body__line"></div>

                <div className="main__body__card">
                    <div className="main__body__card__left">
                        <p>Triglycerides</p>
                        <span>Spectrophotometry</span>
                    </div>

                    <div className="main__body__card__right">
                        <div className="main__body__card__right__direction">
                            <p>250.0</p>
                            <div className="main__body__card__right__direction__container">
                                <img src={UpRed} alt="" />
                            </div>
                        </div>
                        <p>&lt; 150.0 mg/dl</p>
                    </div>
                </div>
                <div className="main__body__line"></div>

                <div className="main__body__card">
                    <div className="main__body__card__left">
                        <p>HDL Cholestrol</p>
                        <span>Calculated</span>
                    </div>

                    <div className="main__body__card__right">
                        <div className="main__body__card__right__direction_correct">
                            <p>50.0</p>
                            <div className="green">
                                <img src={Tick} alt="" />
                            </div>
                        </div>
                        <p>&gt; 40.0 mg/dI</p>
                    </div>
                </div>
                <div className="main__body__line"></div>

                <div className="main__body__card">
                    <div className="main__body__card__left">
                        <p>LDL Cholestrol</p>
                        <span>Calculated</span>
                    </div>

                    <div className="main__body__card__right">
                        <div className="main__body__card__right__direction">
                            <p>200.0</p>
                            <div className="main__body__card__right__direction__container">
                                <img src={UpRed} alt="" />
                            </div>
                        </div>
                        <p>&lt; 100.0 mg/dI</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BottomSheet