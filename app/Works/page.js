
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


function Works() {
    return (
        <>
<Header />
            {/* <!-- ====hero section=== --> */}

            <section>
                <div className="container my-lg-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-lg-5 pt-lg-2">
                            <div className="container carousel-captio">
                                <h1 className="mb-2">How it <span>Works</span></h1>
                                <p className="mb-3" style={{ lineHeight: '30px' }}>Are you looking for a mutually beneficial partnership that drives growth, unlocks new opportunities, 
                                and propels your business to new heights? Look no further! Joining forces with OTOBUCKS 
                                </p>
                                <div className="d-flex gap-3">
                                    <a href="#"><button className="btn-web org-btn">Partner With Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img_bg work-img  pt-xxl-2 ps-xxl-5 pt-xl-2 ps-xl-5 pt-sm-2 ps-sm-5" >
                            <img   src="images/Mockup copy 2 1.png" alt=""  style={{objectFit:'cover', width:'105%'}}/>
                        </div>
                    </div>
                </div>
            </section>



            {/* <!-- steo_1 --> */} 

            <section className="how-works my-5  pt-lg-5">
                <div className="container pt-lg-3">
                    <div className="row mb-3">
                        <div className="col-lg-4 bg_shadow d-flex align-items-center ">
                            <h1>Step <span>1</span></h1>
                            <img src="images/Rectangle 127.png" alt="" />
                        </div>
                        <div className="col-lg-7 gap-1 d-flex right_steps">
                        <img src="images/103.png" alt=""/>
                            <img src="images/101.png" alt=""/>
                            <img src="images/102.png" alt=""/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-lg-4 bg_shadow d-flex align-items-center ">
                            <h1>Step <span>2</span></h1>
                            <img src="images/Rectangle 127.png" alt="" />
                        </div>
                        <div className="col-lg-7 gap-1 d-flex right_steps">
                            <img src="images/9.png" alt=""/>
                            <img src="images/1.png" alt=""/>
                            <img src="images/10.png" alt=""/>
                        </div>
                    </div>


                    <div className="row mb-3">
                        <div className="col-lg-4 bg_shadow d-flex align-items-center ">
                            <h1>Step <span>3</span></h1>
                            <img src="images/Rectangle 127.png" alt="" />
                        </div>
                        <div className="col-lg-7 gap-1 d-flex right_steps">
                            <img src="images/7.png" alt=""/>
                            <img src="images/6.png" alt=""/>
                            <img src="images/5.png" alt=""/>
                        </div>
                    </div>

                </div>
            </section>

<Footer />
        </>
    )
}

export default Works
