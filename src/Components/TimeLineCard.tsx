import { useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import Up from '../assests/icons/Up.svg';
import UpRed from '../assests/icons/UpRed.svg';
import BottomSheet from './BottomSheet';
import './TimeLineCard.scss';

export interface TimeLineCardProps {
    invoice?: string;
    price?: number;
    testName?: string;
    patientId?: string;
    doctorName?: string;
    isNegative?: boolean;
    openModal:any
}

const TimeLineCard = ({
    invoice,
    price,
    testName,
    patientId,
    doctorName,
    isNegative,
    openModal
}: TimeLineCardProps) => {

    const [isOpen, setOpen] = useState(false);

    const openBox = () => {
        setOpen(true);
    };

    const showDialog = () => {
        openModal()
    }

    return (
        <div className="TimeLineCard">
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
                        {isNegative === false && (
                            <button onClick={showDialog}>View Report</button>
                        )}
                        {isNegative === true && (
                            <button onClick={showDialog}>View Report</button>
                        )}
                    </div>
                </div>

                <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>
                            <BottomSheet />
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                </Sheet>
            </div>
        </div>
    );
}

export default TimeLineCard