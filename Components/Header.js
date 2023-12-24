'use client'
import React from 'react'
import Link from 'next/link';


function Header() {

    const openNav = () => {
        const sidepanel = document.getElementById("mySidepanel");
        if (sidepanel) {
            sidepanel.style.left = "0";
        } else {
            console.error("Error: Side panel element not found!");
        }
    };

    const closeNav = () => {
        const sidepanel = document.getElementById("mySidepanel");
        if (sidepanel) {
            sidepanel.style.left = "-100%";
        } else {
            console.error("Error: Side panel element not found!");
        }
    };

    const handleNavLinkClick = () => {
    closeNav();
  };
    
    return (
        <>
            <header className="sticky-top">

                <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="container">
                        {/* <!-- site logo --> */}
                        <Link className="navbar-brand p-0" href="/"><img src="images/Otobucks new version logo (1) 1.png" alt="" /></Link>
                        <button className="navbar-toggler" onClick={openNav} type="button">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                            {/* <!-- menus --> */}
                            <ul className="navbar-nav d-flex gap-4 align-items-center">
                                <li className="nav-item"><Link className="nav-link p-0 active" href="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0" href="/About">About</Link></li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link mx-2 dropdown-toggle p-0" href="#" id="navbarDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="/AutoRepaire"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Auto Repair</Link></li>
                                        <li><Link className="dropdown-item" href="/CarRental"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Rentals</Link></li>
                                        <li><Link className="dropdown-item" href="/CarDealer"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Dealer</Link></li>
                                        <li><Link className="dropdown-item" href="/Housedealer"><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Home Services</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link p-0 " href="/Partner">Partner With Us</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0 " href="/Works">How It Works</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0" href="/Blog">Blogs</Link></li>
                                <li className="nav-item"><Link className="nav-link p-0" href="/Contact">Contact</Link></li>
                                <button className="btn-trans dropdown"><Link className="nav-link p-0" href="/Login">Login</Link>
                                <Link className="nav-link login-btn p-0" href="/Login" id="navbarDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu2" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="/Login"><span><i
                                            className="fa fa-arrow-right me-3"></i></span>Login as Service Provider</Link></li>
                                        <li><Link className="dropdown-item" href="/Login1"><span><i
                                            className="fa fa-arrow-right me-3"></i></span>Login as Product Seller</Link></li>
                                        <li><Link className="dropdown-item" href="/Login2"><span><i
                                            className="fa fa-arrow-right me-3"></i></span>Login as Admin</Link></li>
                                    </ul>
                                    </button>

                                <button className="btn-web"><Link className="nav-link p-0" href="/RegisterCards">Register</Link></button>
                                <button className="navbar-toggler1" onClick={openNav} type="button">
                            <span className="fa fa-bars"></span>
                        </button>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- Sidebar --> */}
                <aside id="mySidepanel" className="sidepanel container-flued">
                    <div className="sidebar">
                        <Link className="navbar-brand p-0" href="/"><img src="images/Otobucks new version logo (1) 1.png" alt="" /></Link>
                        <button className="closebtn" onClick={closeNav}><i className="fa fa-cross"></i></button>
                    </div>
                    <div className='sidebar-links'>
                        {/* <!-- side menus --> */}
                        <ul>
                            <li className="nav-item"><Link className="nav-link active" href="/" onClick={handleNavLinkClick}>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/About" onClick={handleNavLinkClick}>About</Link></li>
                            <li className="pages " data-bs-toggle="collapse"><a  data-bs-toggle="collapse" href="#pages" role="button"
                                    aria-expanded="false" aria-controls="pages">Services</a></li>
                            <li className="collapse_btn nav-item">
                                <a className="nav-link plus_collapse" data-bs-toggle="collapse" href="#pages" role="button"
                                    aria-expanded="false" aria-controls="pages">
                                    <i className="fa fa-arrow-down"></i>
                                </a>
                                <div className="collapse" id="pages">
                                    <ul>
                                        <li className="nav-item"><Link className="nav-link" href="/AutoRepaire" onClick={handleNavLinkClick}><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Auto Repair</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/CarRental" onClick={handleNavLinkClick}><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Rentals</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/CarDealer" onClick={handleNavLinkClick}><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Car Dealer</Link></li>
                                        <li className="nav-item"><Link className="nav-link" href="/Housedealer" onClick={handleNavLinkClick}><span><i
                                            className="fa fa-arrow-right me-3"></i></span> Home Services</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link" href="/Partner" onClick={handleNavLinkClick}>Partner with Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/Works" onClick={handleNavLinkClick}>How It Works</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/Blog" onClick={handleNavLinkClick}>Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/Contact" onClick={handleNavLinkClick}>Contact</Link></li>
                            <button className="dropdown btn-trans mb-3">
                                    <Link className="nav-link nav-link1 p-0 text-center" href="/Login" id="navbarDropdownMenuLink"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{ fontSize: '16px' }}>
                                        Login
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu2 dropmenu-aside" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" href="/Login"  onClick={handleNavLinkClick}><span><i
                                            className="fa fa-arrow-right me-3"></i></span>Login as Service Provider</Link></li>
                                        <li><Link className="dropdown-item" href="/Login1"  onClick={handleNavLinkClick}><span><i
                                            className="fa fa-arrow-right me-3"></i></span>Login as Product Seller</Link></li>
                                        <li><Link className="dropdown-item" href="/Login2"  onClick={handleNavLinkClick}><span><i
                                            className="fa fa-arrow-right me-3"></i></span>Login as Admin</Link></li>
                                    </ul>
                                </button>
                            <button className="btn-web aside-out"><Link className="nav-link" href="/RegisterCards" onClick={handleNavLinkClick}>Register</Link></button>
                        </ul>
                    </div>
                </aside>
            </header>
        </>
    )
}

export default Header
