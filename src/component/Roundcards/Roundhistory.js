import React from 'react';
import Card from 'react-bootstrap/Card';
import uparrow from '../../assets/image/uparrow.svg';

export default function Historycard(){
    return(
        <>
        {/* Roundhistory card in css */}
        <div className='history-head d-flex space-b'>
            <div className='r-history text-weight dark-color'>Round History</div>   
        </div>
        <Card className='rh-card'>
            <Card.Body>
                <div className='closed-price text-weight'>closed price</div>
                <div className=' d-flex space-b'>
                    <div className='r-price text-weight'>$418.810</div>
                    <div className='up-right d-flex'>
                        <div><img src={uparrow}/></div>
                        <div className='up-direction'>$0.370</div>
                    </div>
                </div>
                <div className='lock-price d-flex space-b'>
                    <div className='y-direct dark-color'>Locked Price:</div>
                    <div className='y-direct dark-color'>$418.440</div>
                </div>
                <div className='round-prize d-flex space-b'>
                    <div className='your-result text-weight dark-color'>Prize Pool:</div>
                    <div className='your-result text-weight dark-color'>41.531 BNB</div>
                </div>
                <div className='round-up d-flex space-b'>
                    <div className='up-r  dark-color'>up:</div>
                    <div className='payout-bnb d-flex'>
                        <div className='r-payout text-weight dark-color'>2.15x Payout |</div>
                        <div className='r-bnb dark-color'>19.347 BNB</div>
                    </div>
                </div>
                <div className='round-up d-flex space-b'>
                    <div className='up-r  dark-color'>down:</div>
                    <div className='payout-bnb d-flex'>
                        <div className='r-payout text-weight dark-color'>1.87x Payout |</div>
                        <div className='r-bnb dark-color'>22.185 BNB</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
        </>
    );
}
