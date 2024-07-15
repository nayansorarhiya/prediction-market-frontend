import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import uparrow from '../../assets/image/uparrow.svg';
import win from '../../assets/image/win.svg';
import not from '../../assets/image/not.svg';

export default function Winnercard(){
    return(
        <>
        <div className='history-head d-flex space-b'>
            <div className='y-history text-weight dark-color'>Your History</div> 
            <div className='h-right d-flex'>
                <div className='win text-weight'>WIN</div>
                <div><img src={win}/></div>
            </div>   
        </div>
        <Card className='r-card'>
            <Card.Body className='p-20'>
                <div>
                    <Button className='already-collect text-weight mb-3'>Already Collected</Button>
                </div>
                <div className=' d-flex space-b'>
                    <div className='y-direct dark-color'>Your direction:</div>
                    <div className='up-right d-flex'>
                        <div><img src={uparrow}/></div>
                        <div className='up-direction'>up</div>
                    </div>
                </div>
                <div className='your-position d-flex space-b'>
                    <div className='y-direct dark-color'>Your position:</div>
                    <div className='y-direct dark-color'>0.005 BNB</div>
                </div>
                <div className='d-flex space-b'>
                    <div className='your-result text-weight dark-color'>Your winning:</div>
                    <div className='min-bnb text-weight'>+0.005 BNB</div>
                </div>
                <div className='result-dollar d-flex'>~$2.07</div>
                <hr/>
                <div className='amt-collect d-flex space-b'>
                    <div className='amt'>Amount to collect:</div>
                    <div className='amt-bnb d-flex'>
                        <div className='amt'>0.010 BNB</div> 
                        <img src={not}/>
                    </div>
                </div>
            </Card.Body>
        </Card>
        </>
    );
}