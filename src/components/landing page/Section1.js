import React from 'react';
import "./Section1.css"

export default function Section1() {
  return (
    <div>
      <section>
                <div className='section_1'>
                    <div className='sec1_row'>
                        <div className='sec1_block'>
                            <div className='sec1_left_block'>
                                <h3 className='sec1_left_block_item-1'>
                                    Easy way to make an order
                                </h3>
                                <h1 className='sec1_left_block_item-2'>
                                    The <span>Fastest</span> Delivery<br />in <span>Your Door</span>
                                </h1>
                                <h4 className='sec1_left_block_item-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/><br/> labore et dolore magna aliqua
                                </h4>
                                <div className='sec1_left_block_item-4'>
                                    <button className='sec1_button'>order now</button>
                                    {/* <button className='sec1_button'>all food</button> */}
                                </div>
                            </div>
                        </div>
                        <div className='sec1_block'>
                        <div className='sec1_right_block'>
                            <div className='img-1'>
                                <img src='https://www.flyingcolour.net/wp-content/uploads/2021/03/Delivery-Service-Business-in-Dubai.jpg' alt='image' />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
}
