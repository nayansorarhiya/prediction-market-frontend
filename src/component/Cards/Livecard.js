 import React from 'react';
 import Card from 'react-bootstrap/Card';

 export default function Livecard(){
     return(
        <>
             <Card className='carddisplay'>
                <div className="card">
                    <div className="card-header-live d-flex space-b">
                        <div className='header-left-live text-weight'>
                            <svg viewBox="0 0 24 24" width="24px" fill="rgb(118, 69, 217)" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 kMIYAw"><path d="M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"></path></svg>                            
                            LIVE
                        </div>
                        <div className='header-right-live'>#54321</div>
                    </div>
                    <div className='live-background'>
                        <div className='live-bar'></div>
                    </div>
                    <div className="card-body">
                        <div className='bodytop'>
                        <svg height="65px" width="240px" viewBox="0 0 240 65" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 fIBjTm"><g filter="url(#filter0_i)"><path d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z" fill="#31D0AA"></path></g><defs><filter id="filter0_i" x="10.0001" y="1.03125" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                        </div> 
                        <div className='uptext d-flex'>   
                            <div className='uplive text-weight'>Up</div>
                            <div className='price-payout d-flex'>
                                <div className='price-live text-weight'>2.61x</div>
                                <div className='payout-live'>Payout</div>
                            </div>
                        </div>

                        <div className='price-card-live'>
                            <div className='price-card-in'>
                                <div className='closed-price text-weight'>Last Price</div>
                                <div className='price-div d-flex space-b'>
                                    <div className='dollar-price-live dollar-price-underline'>$388.689</div>
                                    <div className='price-change-live d-flex'>
                                        <div><svg viewBox="0 0 24 24" fill="white" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 hxTTmP"><path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path></svg></div>
                                        <div className='dollar-change'>$-0.303</div>
                                    </div>
                                </div>
                                <div className='locked d-flex space-b'>
                                    <div className='locked-price dark-color'>Locked Price:</div>
                                    <div  className='locked-price dark-color'>$390.591</div>
                                </div> 
                                <div className='pool d-flex space-b'>
                                    <div className='prize-pool text-weight dark-color'>Prize Pool:</div>
                                    <div className='prize-pool text-weight dark-color'>27.992BNB</div>
                                </div> 
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
        </>
     );
 }