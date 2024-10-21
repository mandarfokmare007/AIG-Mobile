import React, { useRef, useState } from 'react'
import { Sheet, SheetRef } from 'react-modal-sheet';
import './TimeLineCard.scss';
import Up from '../assests/icons/Up.svg'
import UpRed from '../assests/icons/UpRed.svg'

export interface TimeLineCardProps {
    invoice?: string;
    price?: number;
    testName?: string;
    patientId?: string;
    doctorName?: string;
    isNegative?: boolean;
}

const TimeLineCard = ({
    invoice,
    price,
    testName,
    patientId,
    doctorName,
    isNegative,
}: TimeLineCardProps) => {

    const [isOpen, setOpen] = useState(false);

    const openBox = () => {
        console.log('clicked');
        setOpen(true);
    };

    return (
        <div className='card'>
            <div className='card__header'>
                {invoice && (
                    <p className='card__header__invoice'>Invoice: #{invoice}</p>
                )}
                {(price !== undefined && isNegative === false) && (
                    <div className='card__header__price'>
                        <p>{price.toFixed(1)}</p>
                        <div className='card__header__price__image'>
                            <img src={Up} alt='up arrow' />
                        </div>
                    </div>
                )}
                {(price !== undefined && isNegative === true) && (
                    <div className='card__header__negative'>
                        <p onClick={openBox}>{price.toFixed(1)}</p>
                        <div className='card__header__negative__negative_image'>
                            <img src={UpRed} alt='down arrow' />
                        </div>
                    </div>
                )}
            </div>
            <div className='card__other'>
                {testName && <span>{testName}</span>}
                {patientId && (
                    <span className='card__other__primary'>{patientId}</span>
                )}
                {doctorName && <span>{doctorName}</span>}
                <div className='card__other__button'>
                    <button>View Report</button>
                </div>
            </div>

            <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>Hi Material</Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
    );
}

export default TimeLineCard