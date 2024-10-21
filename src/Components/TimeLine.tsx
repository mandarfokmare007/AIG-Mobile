import React from 'react'
import './TimeLine.scss';
import Hospital from '../assests/icons/Hospital.png';
import XRAY from '../assests/icons/X-ray.png';
import Experiment from '../assests/icons/Experiment.png';
import TimeLineCard, { TimeLineCardProps } from './TimeLineCard';

const reportData = [
    {
        invoice: '621254892',
        price: 253.0,
        testName: 'Complete CBC',
        patientId: 'UHIDAIG. 1234',
        doctorName: 'Dr Gautham',
        isNegative: false,
    },
    {
        invoice: '621254892',
        price: 300.0,
        testName: 'Lipid Profile',
        patientId: 'UHIDAIG. 1234',
        isNegative: true,
    },
    {
        invoice: '621254892',
        price: 19.6,
        testName: 'Liver Function Test (LFT)',
        patientId: 'UHIDAIG. 1234',
        isNegative: true,
    }
];

const TimeLine = () => {
    return (
        <div>
            <div className="timeline">
                <div className="timeline__header">
                    <p className='timeline__header__date'>
                        Aug 2024
                    </p>
                </div>

                <div className="timeline__card">
                    <div className="timeline__card__left">
                        <div className="timeline__card__left__container">
                            <div className="timeline__card__left__container__img">
                                <img src={Hospital} alt="" />
                            </div>
                            <span>26</span>
                        </div>
                        <div className="timeline__card__left__line">
                        </div>
                    </div>
                    <div className="timeline__card__right">
                        <TimeLineCard invoice={reportData[0].invoice}
                            price={reportData[0].price}
                            testName={reportData[0].testName}
                            patientId={reportData[0].patientId}
                            doctorName={reportData[0].doctorName}
                            isNegative={reportData[0].isNegative}
                        />
                    </div>
                </div>

                <div className="timeline__card">
                    <div className="timeline__card__left">
                        <div className="timeline__card__left__container">
                            <div className="timeline__card__left__container__ximg">
                                <img src={XRAY} alt="" />
                            </div>
                            <span>26</span>
                        </div>
                        <div className="timeline__card__left__line">
                        </div>
                    </div>
                    <div className="timeline__card__right">
                        <TimeLineCard invoice={reportData[1].invoice}
                            price={reportData[1].price}
                            testName={reportData[1].testName}
                            patientId={reportData[1].patientId}
                            doctorName={reportData[1].doctorName}
                            isNegative={reportData[1].isNegative}
                        />
                    </div>
                </div>

                <div className="timeline__card">
                    <div className="timeline__card__left">
                        <div className="timeline__card__left__container">
                            <div className="timeline__card__left__container__ex_img">
                                <img src={Experiment} alt="" />
                            </div>
                            <span>26</span>
                        </div>
                        <div className="timeline__card__left__line">
                        </div>
                    </div>
                    <div className="timeline__card__right">
                        <TimeLineCard invoice={reportData[2].invoice}
                            price={reportData[2].price}
                            testName={reportData[2].testName}
                            patientId={reportData[2].patientId}
                            doctorName={reportData[2].doctorName}
                            isNegative={reportData[2].isNegative}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeLine