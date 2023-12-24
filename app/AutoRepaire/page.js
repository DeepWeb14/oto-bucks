
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


function Auto() {
    return (
        <>
<Header />
            {/* <!-- ====hero section=== --> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-lg-5 pt-lg-2">
                            <div className="container">
                                <h1 className="mb-2">Best Auto Repaire <span>Service</span></h1>
                                <p className="mb-3" style={{ lineHeight: '30px' }}>Are you looking for a mutually beneficial partnership that drives growth, 
                                unlocks new opportunities, and propels your business to new heights? Look no further! Joining forces with OTOBUCKS. 
                                </p>
                                <div className="d-flex gap-3">
                                    <a href="#"><button className="btn-web org-btn">Partner With Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img_bg">
                            <img className="img-fluid" src="images/car-png-39071 (2) 1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ====Out plateform connects=== --> */}
            
            <section className="mt-2 mt-lg-5 py-2">
                <div className="container-fluid "> {/* auto-out */}
                    <div className="row">
                        <div className="col-lg-5 d-flex auto-out">
                            <img className="img-fluid" src="images/pngwing-15 1.png" alt="" />
                        </div>
                        <div className="col-lg-7 pt-5">
                            <div className='container auto-out-content'>
                            <h1 className="mb-2">Out plateform connects you <span>With a Network of Machanics</span></h1>
                            <p>Do you demand only the best service for your vehicle? Well, no matter how complicated they might be, the workshops will handle your car with care. 
                                These mechanics have been trained under the most experienced technicians and hence you can rest assured to get quality work done</p>
                                <div className="d-flex">
                                    <div className="container-fluied about_correct">
                                        <div className="row">
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center">No need to wait in queues</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">We provide quality services in a quick manner</span>
                                            </div>
                                            <div className="d-flex col-lg-12">
                                                <img src="images/charm_circle-tick.png" alt="" />
                                                <span className="d-flex justify-content-center align-items-center">Few clicks and your car is maintained</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row text-center number">
                                    <div className="col-sm-4 d-flex gap-5 justify-content-center">
                                        <div className="mb-2">
                                            <h2>1</h2>
                                            <h5>No need to wait in queues</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 d-flex gap-5 justify-content-center">
                                        <div className="mb-2">
                                            <h2>2</h2>
                                            <h5>We provide quality services in a quick manner</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 d-flex gap-5 justify-content-center">
                                        <div className="mb-2">
                                            <h2>3</h2>
                                            <h5>Few clicks and your car is maintained</h5>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ===next Journy==== --> */}

            <section>
                <div className="container my-1 py-5">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-lg-7 journey">
                            <h1>Top Notch Auto <span>Repaire Services</span></h1>
                            <h4>We are committed to providing excellent service to our customers</h4>
                            <p>Our team of experienced mechanics provides home services</p>
                        </div>
                    </div>

                    <div className="row journey my-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="auto-card mb-2 px-4 py-3 auto-card1">
                                <img className="img-fluid" src="images/pngwing 16.png" alt="" />
                                <h3>Oil Change</h3>
                                <p>Oil changes are a great way to keep your car running smoothly and efficiently.</p>
                                <button className="btn-web1 w-100">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="auto-card auto-card2 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/image 35.png" alt="" />
                                <h3>Auto Detailing</h3>
                                <p>Car exterior and interior detailing and top polishing services. Restore your car's finish.</p>
                                <button className="btn-web1 w-100">Book Now
                                    <div className="book-me-btn">
                                        <a href="https://play.google.com/store/apps/details?id=com.otobucks.app"><div className="book-me-img1"></div></a>
                                        <a href="https://apps.apple.com/ae/app/otobucks/id1669294682"><div className="book-me-img2"></div></a>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="auto-card auto-card3 mb-2 px-4 py-3">
                                <img className="img-fluid" src="images/klipartz 1.png" alt="" />
                                <h3>Car wash</h3>
                                <p>We offer on-demand service for your exterior and interior wash.</p>
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


            {/* <!-- ==sec==== --> */}

            <section>
                <div className="container my-lg-5 my-sm-0 pb-5">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center pt-lg-2">
                            <div className="container">
                                <h1 className="mb-2">Why Choose Our <span>Services</span></h1>
                                <h3>We provide broad network of services</h3>
                                <p className="mb-3" style={{lineHeight: '30px'}}>Our mechanic services are designed to help you maintain your car in top condition. 
                                We offer a wide range of services to meet all your needs and budget requirements. Our workshop partners will perform regular maintenance checks on your car, 
                                ensuring that it continues to run smoothly and efficiently. We also provide free inspections for any issues with your car that may be causing problems
                                </p>
                                <div className="d-flex gap-3">
                                    <a href="#"><button className="btn-trans">Schdule Service</button></a>
                                    <a href="#"><button className="btn-web">Contact Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 img_bg">
                            <img className="img-fluid" src="images/pngimg 1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ==contact== --> */}

            <section className="contact my-2 py-5">
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
                        <div className="col-lg-6 mt-3">
                            <form action="">
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <input type="text" placeholder="Message" />
                                <button className="btn-web org-btn mt-3">Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

<Footer/>
        </>
    )
}

export default Auto
