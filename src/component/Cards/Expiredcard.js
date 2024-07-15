import React from 'react';
import Card from 'react-bootstrap/card';
export default function Expiredcard(){
    return(
        <>
        <div className="c-body">
            <Card className='carddisplay'> 
                <div className="card">
                    <div className="card-header d-flex space-b">
                        <div className='header-left'>
                            <svg viewBox="0 0 24 24" width="21px" fill="rgb(189, 194, 196)" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 VGlUB bandsvg"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"></path></svg>
                            Expired
                        </div>
                        <div className='header-right'>#54321</div>
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

                        <div className='price-card'>
                            <div className='price-card-in'>
                                <div className='closed-price text-weight'>Closed Price</div>
                                <div className='price-div d-flex space-b'>
                                    <div className='dollar-price'>$388.689</div>
                                    <div className='price-change d-flex'>
                                        <div><svg viewBox="0 0 24 24" color="white" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 hxTTmP downarrow "><path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path></svg></div>
                                        <div className='dollar-change'>$-0.303</div>
                                    </div>
                                </div>
                                <div className='locked d-flex space-b'>
                                    <div className='locked-price'>Locked Price:</div>
                                    <div  className='locked-price'>$390.591</div>
                                </div> 
                                <div className='pool d-flex space-b'>
                                    <div className='prize-pool text-weight dark-color'>Prize Pool:</div>
                                    <div className='prize-pool text-weight dark-color'>27.992BNB</div>
                                </div> 
                            </div>
                        </div>
                        <div className='card-body-bottom'>
                            <div className='card-bottom-in'>
                                <svg height="65px" width="240px" viewBox="0 0 240 65" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 fIBjTm"><g filter="url(#filter0_i)"><path d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z" fill="#ED4B9E"></path></g><defs><filter id="filter0_i" x="10.0001" y="1" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                            </div>
                            <div className='uptext d-flex'>
                                <div className='price-payout-bottom d-flex'>
                                    <div className='price-bottom text-weight'>2.42x</div>
                                    <div className='payout-bottom'>Payout</div>
                                </div>
                                <div className='down text-weight'>Down</div>
                            </div>
                        </div>
                    </div>
            </div> 
            </Card>
          </div>
        </>
     );
 }