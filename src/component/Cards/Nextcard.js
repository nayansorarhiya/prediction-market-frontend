import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Cardflip from './Cardflip';
import ReactCardFlip from 'react-card-flip';

export default function Nextcard(){
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardType, setCardType] = useState("")
    const handleClick = (type) => {
        setCardType(type)
        setIsFlipped(!isFlipped);
    };
    return(
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card className='carddisplay'>
                <div className="card">
                    <div className="card-header-next d-flex space-b">
                        <div className='header-left-next text-weight'>
                            <svg viewBox="0 0 24 24" width="24px" fill="white" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 kMIYAw"><path d="M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"></path></svg>                            
                            Next
                        </div>
                        <div className='header-right-next'>#54321</div>
                    </div>
                    <div className="card-body">
                        <div className='bodytop'>
                            <svg height="65px" width="240px" viewBox="0 0 240 65" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 fIBjTm bodytopone"><g filter="url(#filter0_i)"><path d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z" fill="#EFF4F5"></path></g><defs><filter id="filter0_i" x="10.0001" y="1.03125" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                        </div> 
                        <div className='uptext d-flex'>   
                            <div className='uppayout text-weight'>Up</div>
                            <div className='price-payout d-flex'>
                                <div className='price text-weight'>2.61x</div>
                                <div className='payout'>Payout</div>
                            </div>
                        </div>
                        <div className='price-card-next'>
                            <div className='price-card-in'>
                                <div className='pool-next d-flex space-b'>
                                    <div className='prize-pool text-weight dark-color'>Prize Pool:</div>
                                    <div className='prize-pool text-weight dark-color'>27.992BNB</div>
                                </div> 
                                <Button className="enter-up text-weight" onClick={()=> {handleClick("up")}}>Enter UP</Button>
                                <Button className="enter-down text-weight" onClick={()=> {handleClick("down")}}>Enter DOWN</Button>
                            </div>
                        </div>
                        <div className='card-body-bottom'>
                            <div className='card-bottom-in'>
                            <svg height="65px" width="240px" viewBox="0 0 240 65" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 fIBjTm"><g filter="url(#filter0_i)"><path d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z" fill="#EFF4F5"></path></g><defs><filter id="filter0_i" x="10.0001" y="1" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                            </div>
                            <div className='uptext d-flex'>
                                <div className='price-payout-bottom d-flex'>
                                    <div className='price-bottom-live text-weight'>2.42x</div>
                                    <div className='payout-bottom-live'>Payout</div>
                                </div>
                                <div className='down-live text-weight'>Down</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <Cardflip cardType={cardType} isFlipped={isFlipped} setIsFlipped={setIsFlipped}></Cardflip>
            </ReactCardFlip>
        </>
    );

}
