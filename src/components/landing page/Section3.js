import React from 'react';
import './Section3.css'

export default function Section3() {
    return (
        <section>
            <div className='section_3'>
                <div className='sec3_row'>
                    <div className='sec3_container-1'>
                        <div className='sec3_row-1'>
                        <div className='sec3_l1'>
                            <l3>what we serve</l3>
                        </div>
                        <div className='sec3_l2'>
                            <h1>Just sit back at home<br />we will <span>take care</span></h1>
                        </div>
                        <div className='sec3_l3'>
                            <l4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</l4>
                        </div>
                        </div>
                    </div>
                    <div className='sec3_container-2'>
                        <div className='sec3_row-2'>
                            <div className='sec3_block'>
                                <div className="sec3_block_item">
                                    <div className='sec3_block_img'>
                                        <img src='https://fastest-delivery.netlify.app/assets/images/service-01.png' alt=''></img>
                                    </div>
                                    <h5 className='sec3_block_name'>Quick Delivery</h5>
                                    <h3 className='sec3_block_discription'>Lorem ipsum dolor sit amet<br /> consectetur adipiscing elit,eiusmod <br /> labore et dolore</h3>
                                </div>
                            </div>
                            <div className='sec3_block'>
                                <div className="sec3_block_item">
                                    <div className='sec3_block_img'>
                                        <img src='https://fastest-delivery.netlify.app/assets/images/service-02.png' alt=''></img>
                                    </div>
                                    <h5 className='sec3_block_name'>Super Dine In</h5>
                                    <h3 className='sec3_block_discription'>Lorem ipsum dolor sit amet<br /> consectetur adipiscing elit,eiusmod <br /> labore et dolore</h3>
                                </div>
                            </div>
                            <div className='sec3_block'>
                                <div className="sec3_block_item">
                                    <div className='sec3_block_img'>
                                        <img src='https://fastest-delivery.netlify.app/assets/images/service-03.png' alt=''></img>
                                    </div>
                                    <h5 className='sec3_block_name'>Easy Pick Up</h5>
                                    <h3 className='sec3_block_discription'>Lorem ipsum dolor sit amet<br /> consectetur adipiscing elit,eiusmod <br /> labore et dolore</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
