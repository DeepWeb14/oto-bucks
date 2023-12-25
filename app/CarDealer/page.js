
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


function CarDealer() {
    return (
        <>
<Header />
            {/* <!-- ====hero section=== --> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-lg-5 py-lg-5">
                            <div className="container">
                                <h1 className="mb-2">Premium Car  <span>Dealer</span></h1>
                                <p className="mb-3" style={{ lineHeight: '30px' }}>Explore our exceptional collection of high-quality vehicles, meticulously handpicked
                                 to meet your driving desires. With our extensive range of cars, exceptional customer service, and competitive prices, 
                                </p>
                                <div className="d-flex gap-3">
                                    <a href="#"><button className="btn-web org-btn">Partner With Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 img_bg">
                            <img className="img-fluid" src="images/pngwing 23.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ====journey=== --> */}
            
            <section className="mt-2 py-lg-4">
                <div className="container-fluid  pt-lg-5">{/* dearle-dream */}
                    <div className="row">
                        <div className="col-lg-5 mt-lg-5 ptlg-3 p-0 dearle-dream1">
                            <img className="img-fluid" src="images/NicePng_cover-png_4043689 1.png" alt="" />
                        </div>
                        <div className="col-lg-7 pt-3 dearle-dream">
                            <h1 className="mb-2">Where You <span>Dream Cars Wait! </span></h1>
                            <p>A single platform that caters to car owners. Car owners and workshops, this is your chance to get your hands on the best tools</p>
                            <div className="d-flex">
                                    <div className="container-fluied about_correct">
                                        <div className="row">
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center">Top Brands</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">Free Inspection</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">Used & New Cars</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">Financial Assistance</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* <div className="row number">
                                <div className="col-lg-12">
                                    <div className="row text-center">
                                        <div className="col-sm-6 d-flex justify-content-around">
                                            <div className="">
                                                <h2>1</h2>
                                                <h5>Used & New Cars</h5>
                                            </div>
                                            <div className="">
                                                <h2>2</h2>
                                                <h5>Top Brands</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 d-flex justify-content-around">
                                            <div className="">
                                                <h2>3</h2>
                                                <h5>Financial Assistance</h5>
                                            </div>
                                            <div className="">
                                                <h2>4</h2>
                                                <h5>Free Inspection</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ===next Journy==== --> */}

            <section>
                <div className="container journey my-4 py-4">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-lg-7">
                            <h1>Convenience and  <span>After-Sales Support</span></h1>
                            <h4>We value your time and convenience</h4>
                            <p>Our dealers offer a range of additional services to simplify your car ownership experience</p>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="dealer-card dealer-card1 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 25.png" alt="" />
                                <h3>Exceptional Service</h3>
                                <p>Our friendly and knowledgeable sales team is committed to assisting you</p>
                                <button className="btn-web1 w-100">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="dealer-card dealer-card2 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/bro-takes-photos-2NId3wBlG7k-unsplash-removebg-preview.png" alt="" />
                                <h3>Competitive Pricing</h3>
                                <p>We collaborate with trusted financial institutions to secure favorable terms</p>
                                <button className="btn-web1 w-100">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="dealer-card dealer-card3 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 26.png" alt="" />
                                <h3>Unparalleled Quality</h3>
                                <p>We meticulously scrutinize every aspect of the car's performance, safety features</p>
                                <button className="btn-web1 w-100">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ==contact== --> */}

            <section className="contact">
                <div className="container my-2 pb-5">
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
                        <div className="col-lg-6 mt-3">
                            <form action="">
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <input type="text" placeholder="Message" />
                                <button className="btn-web org-btn mt-4">Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

<Footer />
        </>
    )
}

export default CarDealer
