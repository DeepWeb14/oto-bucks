import Link from 'next/link'
import React from 'react'
function Footer() {
    return (
        <>
            {/* <!-- ===footer==== --> */}

            <footer className="img_bg_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mb-2 pe-lg-5 bord">
                            <img className="img-fluid mb-3" src="images/Otobucks-new-version-logo-(1) 5.png" alt=""/>
                            <span>Otobucks is a one-stop shop for all your car needs. We can help you find a workshop, and spare parts, and even rent or buy a car. 
                                You can also take care of your car insurance and car loans in one place</span>
                        </div>
                        <div className="col-lg-3 col-md-4 mb-2 ps-lg-3 bord img">
                        
                        <h3 className=''>Download App</h3>
                        <Link href='#'><img className='my-2' src="images/play1.svg" alt="" /></Link>
                        <Link  href='#'><img className='my-2' src="images/play2.svg" alt="" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-4 mb-2 bord">
                        <h3>Usefull Links</h3>
                        <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="#">Terms and Condition</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </div>
                        <div className="col-lg-3 col-md-4 mb-2footer-contact">
                            <h3>Contact us</h3>
                            <p>UAE</p>
                            <p>+971 542 - 457866</p>
                            <p>infootobucks@gmail.com</p>
                            <div className="icons">
                                <span><a href='https://www.facebook.com/otobucks'><i className="fa-brands fa-facebook-f"></i></a></span>
                                <span><a href='https://www.instagram.com/otobuckss/'><i className="fa-brands fa-instagram"></i></a></span>
                                <span><a href='https://www.linkedin.com/uas/login-submit'><i className="fa-brands fa-linkedin"></i></a></span>
                                <span><a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fotobucks'><i className="fa-brands fa-twitter"></i></a></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </footer>

            <div className="footer_bottom">
                    <p>Copyright © 2023 Design & Developed by GMITS TECH</p>
            </div>
            
        </>
    )
}

export default Footer
