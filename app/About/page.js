
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


function About() {
    return (
        <>

<Header />
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="container">
                                <h1 className="mb-2 mt-lg-5">About <span>Us</span></h1>
                                <p className="mb-3" style={{ lineHeight: '30px' }}>The automobile industry has seen a radical change in the past decade. The advent of the digital
                                    age and the invention of artificial intelligence (AI) have revolutionized the way we drive and maintain our cars.</p>
                                <div className="d-flex">
                                    <div className="container-fluied about_correct">
                                        <div className="row">
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center">RELIABLE</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">ONE-STOP SHOP</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">100% SATISFACTION</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">ROUND-THE-CLOCK SUPPORT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img_bg about_img">
                            <img className="img-fluid" src="images/pngwing 11.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ===Our vision==== --> */}
            <section>
                <div className="container mt-5 pt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 mb-4">
                            <div className='card  our-box our-box1'>
                                <div className=" row px-4 py-3  mt-4">
                                    <div className="col-9">
                                        <h1>Our <span>vision</span></h1>
                                    </div>
                                    <div className="col-3 our-img1 d-flex justify-content-end">
                                        <img src="images/Vector.png" alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mt-3">
                                            <p>Our mission is to make life easier for everyone. We don't want people to spend hours looking for the right car repair shop,
                                                mechanic, or spare parts; hence it is only fair that we go to great lengths about screening the service providers and only
                                                tie up with the most genuine ones.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-2">
                            <div className='card our-box our-box2'>
                                <div className=" row px-4 py-3 mt-4">
                                    <div className="col-9">
                                        <h1>Our <span>Mission</span></h1>
                                    </div>
                                    <div className="col-3 our-img2  d-flex justify-content-end">
                                        <img src="images/Vector (18).png" alt="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mt-3">
                                            <p>We wish to make the Otobucks app a game-changer for both car owners and service providers so that work happens at a faster
                                                clip for all. We are all geared up for creating lifetime value and building lasting relationships with our valuable customers.<br></br> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ===How Otobucks==== --> */}
            <section>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-12 text-center">
                            <h1><span>How</span> Otobucks <span>Work?</span></h1>
                        </div>
                    </div>

                    <div className="row mb-3 about-how">
                        <div className="col-lg-4 mb-2 gap-4">
                            <div className="about-how-card about-how-card1 pt-5 px-4">
                                <img className="one" src="images/Vector 1.png" alt="" />
                                <h4>Connect With The Best Work Shops</h4>
                                <p>Just few clicks and your car is well taken care off</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2  gap-4">
                            <div className="about-how-card about-how-card2 pt-5 px-4">
                                <img src="images/Vector (1).png" alt="" />
                                <h4>We Help You Get The Best Service</h4>
                                <p>Fast & reliable services for car owners</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2 about-how-card3 gap-4">
                            <div className="about-how-card  pt-5 px-4">
                                <img src="images/Vector (2).png" alt="" />
                                <h4>Compare Prices And Ratings</h4>
                                <p>We make sure you get the best possible service with the budget that fits your needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* <!-- =====Quality-sec==== --> */}

            <section className="my-2">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-6 pt-lg-5">
                            <h1><span>We Provide</span> Quality
                                <span> Services</span>
                            </h1>
                            <p>We're one of the biggest automotive service directories online, providing services for all types of cars.
                                We have a number of trusted workshops and suppliers across the UAE We connect you to the most reliable car
                                mechanics and workshops within minutes!</p>
                            <div className="d-flex gap-3 my-3 pt-4">
                                <button className="btn-trans">Schedule Service</button>
                                <button className="btn-web">Contact Us</button>
                            </div>
                        </div>
                        <div className="quality col-lg-6 d-flex justify-content-end">
                            <img className="quality-img" src="images/secc.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ==contact== --> */}

            <section className="contact my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Contact <span>Us</span></h1>
                            <p>OTOBUCKS is a one-stop shop for all your car needs. We can help you find a workshop, and spare parts, and even rent or buy a car.
                                You can also take care of your car insurance and car loans in one place</p>
                            <div className="row">
                                <div className="col-12 contact-text">
                                    <p>Our Location: <h5>UAE</h5></p>
                                    <p>Contact Us: <h5>+971 542 - 457866</h5></p>
                                    <p>Write To Us: <h5>info@otobucks.com</h5></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 contact-inp mt-3">
                            <form>
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <input type="text" placeholder="Message" />
                                <button className="btn-web org-btn mt-3">Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}

export default About
