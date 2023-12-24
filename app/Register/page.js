'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function page() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        // Toggle the password visibility
        setPasswordVisible(!passwordVisible);
    };
    const togglePassword2 = () => {
        // Toggle the password visibility
        setPasswordVisible(!passwordVisible);
    };
    return (
        <>
            <form>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 reg-left">
                            <div className="reg-content">
                                <img className='' src="images/Otobucks-new-version-logo-(1) 5.png" alt="" />
                                <p>We're a market place that helps auto workshops find long term customers. We provide a space where people can find the best auto workshops
                                    in their area and book appointments with their preferred mechanic. You can also promote your services and gain new clients.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 text-center mt-sm-4 ms-lg-2 reg-right p-3 d-flex justify-content-center flex-column">
                            <h2 className="mb-2 mt-sm-3">Welcome To Service Provider Registration!</h2>
                            <span className='d-flex'>We look forward to long term business partnership</span>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6>First Name</h6>
                                    <input type="text" className="form-control mb-2" placeholder="First Name" />
                                </div>
                                <div className="col-sm-6">
                                    <h6>Last Name</h6>
                                    <input type="text" className="form-control mb-2" placeholder="Last Name" />
                                </div>
                                <div className="col-sm-6">
                                    <h6>E-mail</h6>
                                    <input type="email" className="form-control mb-2" placeholder="Your Email" />
                                </div>
                                <div className="col-sm-6">
                                    <h6>Type</h6>
                                    <input type="email" className="form-control mb-2" placeholder="Company Name" />
                                </div>
                                <div className="col-sm-6">
                                    <h6>Country</h6>
                                    <select name="" id="" className="form-control mb-2">
                                        <option value="">Select Country</option>
                                        <option value="">United Arab Emirates</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <h6>State</h6>
                                    <select name="" id="" className="form-control mb-2">
                                        <option value="">Select State</option>
                                        <option value="">Abu Dhabi Emirates</option>
                                        <option value="">Ajman Emirates</option>
                                        <option value="">Dubai</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Phone No</h6>
                                    <div className='d-flex'>
                                        <select name="" id="" className="form-control form-control-sel mb-2">
                                            <option value="">+971</option>
                                            <option value="">+972</option>
                                            <option value="">+91</option>
                                            <option value="">+92</option>
                                        </select>
                                        <input type="number" className="form-control form-control-num  mb-2" placeholder='Phone No' />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Whatsapp No</h6>
                                    <div className='d-flex'>
                                        <select name="" id="" className="form-control form-control-sel mb-2">
                                            <option value="">+971</option>
                                            <option value="">+972</option>
                                            <option value="">+91</option>
                                            <option value="">+92</option>
                                        </select>
                                        <input type="number" className="form-control form-control-num  mb-2" placeholder='Phone No' />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Select Service</h6>
                                    <select name="" id="" className="form-control mb-2">
                                        <option value="">Select</option>
                                        <option value="">Insurance</option>
                                        <option value="">Home Services</option>
                                        <option value="">Book A Car</option>
                                        <option value="">Auto Repair</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <h6>How Did You Hear About Us</h6>
                                    <select name="" id="" className="form-control mb-2">
                                        <option value="">Select</option>
                                        <option value="">Facebook</option>
                                        <option value="">Linkedin</option>
                                        <option value="">Whatsapp</option>
                                        <option value="">Google</option>
                                        <option value="">Instagram</option>
                                        <option value="">Others</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Password</h6>
                                    <div className="input-group">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter password"
                                            aria-describedby="password-toggle"
                                        />
                                        <button type="button" className="btn form-btn h-100" id="password-toggle" onClick={togglePassword}>
                                            <i className="fas fa-eye text-white"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Confirm Password</h6>
                                    <div className="input-group">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter password"
                                            aria-describedby="password-toggle"
                                        />
                                        <button type="button" className="btn form-btn h-100" id="password-toggle" onClick={togglePassword2}>
                                            <i className="fas fa-eye text-white"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center m-3">
                                    <div className="privacy">
                                        <input type="checkbox" /><span className="ms-2">I agree to the <a href="">Privacy</a> and <a href="">Terms</a>.</span>
                                    </div>
                                </div>
                                <button type="submit" className="btn form-btn ms-sm-2  reg-btn mb-2 mb-sm-3 ">Register</button>
                                <div className='d-flex justify-content-between'>
                                    <p>Already have an account <Link className="reg" href="/Login">Sign in</Link></p>
                                    <p>Having trouble in registeration, <Link className="reg" target='blank' href="https://api.whatsapp.com/send?phone=971542457866">Contact us</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default page
