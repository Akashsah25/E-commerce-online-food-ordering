import React from 'react';
import "./Section2.css"

export default function Section2() {
    return (
        <div>
            <section>
                <div className='section_2'>
                    <div className='sec2_row'>
                        <div className='sec2_block'>
                            <div className="sec2_block_item">
                                <div className='sec2_block_img'>
                                    <img src="https://fastest-delivery.netlify.app/assets/images/category-01.png" alt='img'></img>
                                </div>
                                <h5 className='sec2_block_name'>Burger</h5>
                            </div>
                        </div>
                        <div className='sec2_block'>
                            <div className="sec2_block_item">
                                <div className='sec2_block_img'>
                                    <img src='https://fastest-delivery.netlify.app/assets/images/category-02.png' alt=''></img>
                                </div>
                                <h5 className='sec2_block_name'>Pizza</h5>
                            </div>
                        </div>
                        <div className='sec2_block'>
                            <div className="sec2_block_item">
                                <div className='sec2_block_img'>
                                    <img src='https://fastest-delivery.netlify.app/assets/images/category-03.png' alt=''></img>
                                </div>
                                <h5 className='sec2_block_name'>Starter</h5>
                            </div>
                        </div>
                        <div className='sec2_block'>
                            <div className="sec2_block_item">
                                <div className='sec2_block_img'>
                                    <img src='https://freesvg.org/storage/img/thumb/1526067133.png' alt=''></img>
                                </div>
                                <h5 className='sec2_block_name'>Dessert</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
