
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


function House() {

    return (
        <>
<Header />
            {/* <!-- ====hero section=== --> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-lg-5">
                            <div className="container">
                                <h1 className="mb-2">Premium House <span>Dealers</span></h1>
                                <p className="mb-3" style={{ lineHeight: '30px' }}>Your Trusted Partner for Reliable Home Solutions From Fix-ups to Upgrades. Elevate Your Home with Our Services! 
                                </p>
                                <div className="d-flex gap-3">
                                    <a href="#"><button className="btn-web org-btn">Partner With Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img_bg">
                            <img className="img-fluid" src="images/pngwing 27.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ====journey=== --> */}

            <section className="my-3 pt-lg-5">
                <div className="container-fluid house-dealer">
                    <div className="row">
                        <div className="col-lg-5 p-0">
                            <img className="img-fluid" src="images/pngwing 28.png" alt="" />
                        </div>
                        <div className="col-lg-7 p-lg-5 mt-lg-3">
                            <h1 className="mb-2">Where Home Repairs  <span>Meet Perfection</span></h1>
                            <h3>One-Stop Home Care Hub! </h3>
                            <p>From plumbing and electrical work to carpentry, painting, and more—we've curated a comprehensive range of services to meet all your home needs under one roof</p>
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
                <div className="container journey house-card my-4 py-1">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-lg-7">
                            <h1>Your satisfaction is our   <span>measure of success </span></h1>
                            <h4>We value your time and convenience</h4>
                            <p>We go the extra mile to ensure each service meets the highest standards,
leaving you delighted and content
</p>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-lg-4 col-md-6 house-card1">
                            <div className="card mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 31.png" alt="" />
                                <h3>Customer-Centric Approach</h3>
                                <p>From the moment you engage with us, your needs become our priority. We listen attentively, understand your requirements, and tailor solutions to exceed your expectations</p>
                                <button className="btn-web1">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 house-card2">
                            <div className="card mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 29.png" alt="" />
                                <h3>Expert Professionals, Every Time </h3>
                                <p>We've handpicked the best in the business! Our platform connects you with licensed, vetted experts, ensuring top-notch service and peace of mind</p>
                                <button className="btn-web1">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 house-card3">
                            <div className="card mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/pngwing 30.png" alt="" />
                                <h3>Transparent Pricing, No Surprises</h3>
                                <p>We value your trust. Our upfront pricing and detailed service breakdowns ensure clarity, leaving no room for hidden costs or unexpected charges.</p>
                                <button className="btn-web1">Book Now
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

<Footer/>
        </>
    )
}

export default House
