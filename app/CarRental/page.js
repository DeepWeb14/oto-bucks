
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


function CarRental() {
    return (

        <>
<Header />
            {/* <!-- ====hero section=== --> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center pt-lg-5">
                            <div className="container">
                                <h1 className="mb-2">Welcome To <span>Car Rental</span></h1>
                                <p className="mb-3" style={{ lineHeight: '30px' }}>Are you looking for a mutually beneficial partnership that drives growth, unlocks new opportunities, 
                                and propels your business to new heights? Look no further! Joining forces with OTOBUCKS 
                                </p>
                                <div className="d-flex gap-3">
                                    <a href="#"><button className="btn-web org-btn">Partner With Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 img_bg">
                            <img className="img-fluid" src="images/pngwing 18.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ====journey=== --> */}
            
            <section className="my-5">
                <div className="container-fluid ">{/* rentail-journy */}
                    <div className="row">
                        <div className="col-lg-5 p-0 mt-lg-5 rentail-journy">
                            <img className="img-fluid" src="images/pngwing 19.png" alt="" />
                        </div>
                        <div className="col-lg-7 p-lg-4 mt-4 rentail-journy1">
                            <h1 className="mb-4">Your Journey, <span>Your Way!</span></h1>
                            <p>At OTOBUCKS APP, we understand that every journey is unique. That's why we're here to offer you a seamless and personalized car rental experience that caters to your specific needs. 
                                Whether you're embarking on a weekend getaway or a business trip, or just need a reliable set of wheels, we've got the perfect car for you</p>
                                <div className="d-flex">
                                    <div className="container-fluied about_correct">
                                        <div className="row">
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center">Diverse Fleet</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">Easy Booking</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">Flexible Rental Options</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">Well-Maintained Vehicles</span>
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
                <div className="container journey  my-5 py-2 py-lg-3">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-lg-7">
                            <h1>Ready to Embark on Your <span>Next Journey</span></h1>
                            <h4>Booking a rental car on our app is simple</h4>
                            <p>Our team of experienced mechanics provides home services</p>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="rentail-card rentail-card1 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 20.png" alt="" />
                                <h3>Experience Limo</h3>
                                <p>Our limousine rentals are designed to make your special truly unforgettable</p>
                                <button className="btn-web1 w-100">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="rentail-card rentail-card2 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 21.png" alt="" />
                                <h3>Car Rentals</h3>
                                <p>Choose Your Cars, Browse our fleet and select the car that suits your travel needs,</p>
                                <button className="btn-web1 w-100">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="rentail-card rentail-card3 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 22.png" alt="" />
                                <h3>Variety of Sizes</h3>
                                <p>Our fleet includes a range of bus sizes, from minibusses to full-sized coaches</p>
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

export default CarRental
