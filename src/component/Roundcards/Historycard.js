import React from 'react';
import Card from 'react-bootstrap/Card';
import block from '../../assets/image/block.svg';
import downarrow from '../../assets/image/downarrow.svg';
export default function Historycard(){
    return(
        <>
        {/* history card in css */}
        <div className='history-head d-flex space-b'>
            <div className='y-history text-weight dark-color'>Your History</div> 
            <div className='h-right d-flex'>
                <div className='lose text-weight'>LOSE</div>
                <div><img src={block}/></div>
            </div>   
        </div>
        <Card className='r-card'>
            <Card.Body className='p-20'>
                <div className=' d-flex space-b'>
                    <div className='y-direct dark-color'>Your direction:</div>
                    <div className='down-right d-flex'>
                        <div><img src={downarrow}/></div>
                        <div className='down-direction'>Down</div>
                    </div>
                </div>
                <div className='your-position d-flex space-b'>
                    <div className='y-direct dark-color'>Your position:</div>
                    <div className='y-direct dark-color'>0.005 BNB</div>
                </div>
                <div className=' d-flex space-b'>
                    <div className='your-result text-weight dark-color'>Your Result:</div>
                    <div className='min-bnb text-weight'>-0.005 BNB</div>
                </div>
                <div className='result-dollar d-flex'>~$2.07</div>
            </Card.Body>
        </Card>
        </>
    );
}
