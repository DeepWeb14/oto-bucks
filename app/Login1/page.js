'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function page() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        // Toggle the password visibility
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <section className="form_center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-5 col-sm-8">
                            <form action="" className='text-center'>
                                <img src="images/Otobucks new version logo (1) 1.png" alt=""/>
                                <h2 className="text-center mb-2">Vender panel</h2>
                                <input type="text" className="form-control mb-4" id="password" placeholder="Username" aria-describedby="password-toggle" />
                                <div>
                                    <div className="input-group">
                                        <input type={passwordVisible ? 'text' : 'password'} className="form-control" id="password" placeholder="password" aria-describedby="password-toggle"/>
                                        <button type="button" className="btn form-btn h-100" id="password-toggle" onClick={togglePassword}>
                                            <i className="fas fa-eye text-white"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between my-3">
                                    <div>
                                        <input type="checkbox"/><span className="ms-2" >Remember me</span>
                                    </div>
                                    <Link href="#">Forget Password</Link>
                                </div>
                                <button type="submit" className="btn form-btn w-100">Login</button>
                                <p className="my-3">New Vendor? <Link className="reg" href="/Register">Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
