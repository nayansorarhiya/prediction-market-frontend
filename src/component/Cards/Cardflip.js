import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

export default function Cardflip(props){   
    const handleClick = () => {
        props.setIsFlipped(!props.isFlipped);
    }; 

    const [ value, setValue ] = useState(0); 
   
    return(
        <>
            <div className='carddisplay'> 
                <div className="card">
                    <div className="card-header-flip d-flex space-b">
                        <div className='header-left-flip d-flex' onClick={handleClick}>
                            <svg viewBox="0 0 24 24" width="24px" fill="rgb(40, 13, 95)" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 fIBjTm"><path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"></path></svg>                           
                            <div className='set-position text-weight dark-color'> Set Position</div>
                        </div>
                        <div className={`header-right-flip d-flex ${props.cardType}`}>
                            {props.cardType == "up" ? (<svg viewBox="0 0 24 24" fill="white" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 hxTTmP"><path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path></svg>):(
                            <svg viewBox="0 0 24 24" fill="white" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 hxTTmP"><path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path></svg>)}
                            <div className="header-flip-up">{props.cardType}</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className='flip-body d-flex space-b'>
                            <div className='flip-cmmit'>Commit:</div>
                            <div className='bnb-flip-svg d-flex'>
                                <svg viewBox="0 0 96 96" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-5a69fd5e-0 fjAkFI"><circle cx="48" cy="48" r="48" fill="#F0B90B"></circle><path d="M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z" fill="white"></path></svg>
                                <div className='bnb-flip text-weight dark-color'>bnb</div>
                            </div>
                        </div>
                        <Form>
                            <Form.Group className="mb-3 bnb-background" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="0.0"  className='bnb-price' />
                            </Form.Group>
                        </Form>
                        <div className='start'>
                            <div className='start-to d-flex'>
                                <div className='start-line'>
                                    <svg viewBox="0 0 198 199" class="sc-5a69fd5e-0 fIBjTm mobile-icon" color="text" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z" fill="#633001"></path><path d="M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z" fill="#D1884F"></path><path d="M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z" fill="#FEDC90"></path><path class="eye" d="M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z" fill="#633001"></path></svg>
                                </div>
                                {/* <div  className='line'> */}
                                <RangeSlider className='line' 
                                   value={value}
                                   onChange={e => setValue(e.target.value)}
                                   tooltipLabel={currentValue => `${currentValue}%`}
                                   
                                />
                                 {/* </div> */}
                            </div>
                        </div>  
                        <div className='pr d-flex'>
                            <Button className="btn-1">10%</Button>
                            <Button className="btn-1">25%</Button>
                            <Button className="btn-1">50%</Button>
                            <Button className="btn-1">75%</Button>
                            <Button className="btn-1">MAX</Button>
                        </div>
                        <div>
                            <Button className='connect-wallet text-weight'>Connect Wallet</Button>
                        </div>
                        {/* <div>
                            <Button className='insufficient-balance'>insufficient BNB balance</Button>
                        </div> */}
                        <p className='notice'>
                            You wan't be able to remove or change your position once you enter it.
                        </p>
                    </div>
                </div> 
            </div>
        </>
    );
}