
import Slider from '@/Components/Slider';
import Link from 'next/link'
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

function Home() {
    const brands = [
        { id: 1, src: 'images/simple-icons_audi.png' },
        { id: 2, src: 'images/Vector (5).png' },
        { id: 3, src: 'images/simple-icons_nissan.png' },
        { id: 4, src: 'images/Vector (16).png' },
        { id: 5, src: 'images/Vector (17).png' },
        { id: 6, src: 'images/simple-icons_kia.png' },
        { id: 8, src: 'images/icons8-mitsubishi-100.png' },
        { id: 9, src: 'images/icons8-lamborghini-100.png' },
        { id: 10, src: 'images/icons8-ferrari.png' },
        { id: 11, src: 'images/icons8-rolls-royce-100.png'},
        { id: 12, src: 'images/icons8-tesla-100.png' },
        { id: 13, src: 'images/icons8-volkswagen.png' },
        { id: 15, src: 'images/icons8-jeep-100.png'},
        { id: 16, src: 'images/icons8-hyundai-100.png'},
        { id: 17, src: 'images/icons8-chevrolet-100.png' },
        { id: 18, src: 'images/icons8-toyota-100.png' }, 
    ];
    return (
        <>

            <Header />
            {/* <!-- ====hero section=== --> */}

                <section>
                    <div className="carousel slide py-1" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container heroSection d-block w-200">
                                    <div className="row">
                                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-3 pt-lg-5">
                                            <div className="container carousel-captio">
                                                <h1 className="mb-3">The Power Of <br /> <span>Convenience</span></h1>
                                                <p className="mb-4" style={{ lineHeight: "30px" }}>
                                                    The automobile industry has seen a radical change in the past decade. The advent of the digital age and the invention of AI
                                                </p>
                                                <div className="d-flex gap-3">
                                                    <Link href="#"><button className="btn-trans">Schedule Service</button></Link>
                                                    <Link href="/Contact"><button className="btn-web">Contact Us</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 img_bg">
                                            <img className="img-fluid py-3" src='/images/hero3.png' alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container bd-placeholder-img bd-placeholder-img-lg d-block w-200">
                                    <div className="row">
                                        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-3 pt-lg-5">
                                            <div className="container carousel-captio">
                                                <h1 className="mb-3">The Power Of <br /> <span>Convenience</span></h1>
                                                <p className="mb-4" style={{ lineHeight: "30px" }}>
                                                    The automobile industry has seen a radical change in the past decade. The advent of the digital age and the invention of AI
                                                </p>
                                                <div className="d-flex gap-3">
                                                    <Link href="#"><button className="btn-trans">Schedule Service</button></Link>
                                                    <Link href="/Contact"><button className="btn-web">Contact Us</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 img_bg">
                                            <img className="img-fluid" src="/images/Mobile2 1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                {/* <!-- ====featured section=== --> */}

                <section className="feature py-5 mt-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center text-center">
                            <div className="col-lg-8">
                                <h1>Our Featured <span>Services</span></h1>
                                <p>We offer full service auto repair & maintenance</p>
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/f-1.png" alt="" /></span>
                                    <h6>Diagnostic</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (3).png" alt="" /></span>
                                    <h6>Engine Repair</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (4).png" alt="" /></span>
                                    <h6>Oil / Lube / Filter</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (13).png" alt="" /></span>
                                    <h6>Tires</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (6).png" alt="" /></span>
                                    <h6>Transmission</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (7).png" alt="" /></span>
                                    <h6>Battery</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 sms">
                                <span><img src="images/sms.png" alt="" /></span>
                                <p>If your engine is sick or tired we have the equipment to check, diagnose and efficiently fix any
                                    problem you may have.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <img className="img-fluid" src="images/f-engine.png" alt="" />
                            </div>
                        </div>
                        <div className="row py-3">
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (8).png" alt="" /></span>
                                    <h6>Handy Man</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (9).png" alt="" /></span>
                                    <h6>Smart Home</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (10).png" alt="" /></span>
                                    <h6>Plumbing</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Group.png" alt="" /></span>
                                    <h6>Cleaning</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Vector (11).png" alt="" /></span>
                                    <h6>renovation</h6>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="card">
                                    <span><img src="images/Group 2.png" alt="" /></span>
                                    <h6>Painting</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 sms">
                                <span><img src="images/sms.png" alt="" /></span>
                                <p>If your engine is sick or tired we have the equipment to check,  diagnose and efficiently fix any problem you may have.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <img className="img-fluid" src="images/house.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ===available=== --> */}

                <section className="my-4 mx-2">
                    <div className="container gap-2 available">
                        <div className="row">
                            <div className="col-lg-4 p-5">
                                <h3>All Service available</h3>
                                <p>at your disposal</p>
                            </div>
                            <div className="col-lg-8 p-0 img_bg">
                                <img className="img-fluid" src="images/Mockup copy 2 1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ====fingertips=== --> */}

                {/* <section className="py-5">
                <div className="container">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col-lg-8">
                            <h1>Brands We <span>Serve</span></h1>
                        </div>
                    </div>

                    <div className="row py-5 slider feature brands">
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="card  mt-3">
                                <span><img className="img-fluid" src="images/simple-icons_audi.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="card mt-3">
                                <span><img className="img-fluid" src="images/Vector (5).png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="card mt-3">
                                <span><img className="img-fluid" src="images/simple-icons_nissan.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="card mt-3">
                                <span><img className="img-fluid" src="images/Vector (16).png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="card mt-3">
                                <span><img className="img-fluid" src="images/Vector (17).png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="card mt-3">
                                <span><img className="img-fluid" src="images/simple-icons_kia.png" alt="" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

                <section className="pt-5 pb-2">
                    <div className="container">
                        <div className="row text-center d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h1>Brands We <span>Serve</span></h1>
                            </div>
                        </div>

                        <Slider slides={brands} autoSlideInterval={3000} />

                    </div>
                </section>


                {/* <!-- ===offer=== --> */}

                <section className="offer ">
                    <div className="container">
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-9">
                                <h1>What we <span>Offer</span>
                                </h1>
                                <p>A single platform that caters to car owners. Car owners and workshops, this is your chance to get
                                    your hands on the best tools</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center my-3">
                            <div className="col-lg-6 mb-2 d-flex justify-content-center">
                                <div className="card d-flex justify-content-center">
                                    <img src="images/car.png" alt="" />
                                    <div className="p-3 my-4">
                                        <img src="images/house-1.png" alt="" />
                                        <h3>
                                            Car Repair
                                        </h3>
                                        <p>When it comes to car repair there are a lot of questions you have, which is why we're
                                            here!</p>
                                    </div>
                                    <div className="p-3 my-4">
                                        <img src="images/Group (1).png" alt="" />
                                        <h3>
                                            Spare Parts
                                        </h3>
                                        <p>Looking for reliable auto spare parts sellers? Then you're in the right place</p>
                                    </div>
                                    <div className="p-3 my-4">
                                        <img src="images/fluent-mdl2_money.png" alt="" />
                                        <h3>
                                            Auto Loans
                                        </h3>
                                        <p>If you are looking for hassle-free and affordable auto insurance coverage, Otobucks is the answer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2 d-flex justify-content-center">
                                <div className="card d-flex justify-content-center">
                                    <img src="images/house2.png" alt="" />
                                    <div className="p-3 my-4">
                                        <img src="images/icon-park-outline_protection.png" alt="" />
                                        <h3>
                                            Insulation
                                        </h3>
                                        <p>When it comes to car repair there are a lot of questions you have, which is why we're
                                            here!</p>
                                    </div>
                                    <div className="p-3 my-4">
                                        <img src="images/Group (2).png" alt="" />
                                        <h3>
                                            Raw  Materials
                                        </h3>
                                        <p>Looking for reliable auto spare parts sellers? Then you're in the right place</p>
                                    </div>
                                    <div className="p-3 my-4">
                                        <img src="images/Vector (14).png" alt="" />
                                        <h3>
                                            Renting
                                        </h3>
                                        <p>If you are looking for hassle-free and affordable auto insurance coverage, Otobucks is the answer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <Footer />
            </>
            )
}

            export default Home
