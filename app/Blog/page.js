
import Link from 'next/link'
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
function Blog() {


    return (
        <>
<Header />
            <section>
                <div className="container-fluid Blog text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='blog_1'>
                                <h4>Blogs and News</h4>
                            </div>
                            <h2>LATEST BLOGS AND NEWS</h2>
                            <div className='search'>
                                <input type="text" placeholder='Search Blogs, Tags' />
                                <button><i className='fas fa-search'></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>

                <div className="container my-5 py-3">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <div className="col-lg-7">
                            <h1>Check Out Our  <span>Latest NewsAnd Blogs</span></h1>
                            <p>Don't miss out on the latest trends that's taking the world by storm</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-lg-5">
                            <div className="blog-card">
                                <div className="blog-card-img"></div>
                                <div className="card-date">
                                    <span>17  Jul</span>
                                </div>
                                <div className="card-head">
                                    <span>The Latest Trends in Car Services</span>
                                </div>
                                <div className="card-comment">
                                    <div>
                                        <i className="fa-regular fa-comment-dots"></i>
                                        <a href="#">3 Comment</a>
                                    </div>
                                    <div>
                                        <Link href="/Blog3">Read More</Link>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="blog-card">
                                <div className="blog-card-img1"></div>
                                <div className="card-date">
                                    <div>19  <span>Nov</span></div>
                                </div>
                                <div className="card-head">
                                    <span>The Importance of Regular</span>
                                </div>
                                <div className="card-comment">
                                    <div>
                                        <i className="fa-regular fa-comment-dots"></i>
                                        <a href="#">3 Comment</a>
                                    </div>
                                    <div>
                                        <Link href="/Blog2">Read More</Link>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="side-news">
                                <h4>Lastest Blogs</h4>
                                <div className="row ">
                                    <div className="col-6">
                                        <Link href='/Blog3'><div className="side-news-img2"></div></Link>
                                    </div>
                                    <div className="col-6">
                                        <div><a href='/Blog3'><h6>Latest Trends</h6>July 17, 2023</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Link href='/Blog2'><div className="side-news-img3"></div></Link>
                                    </div>
                                    <div className="col-6">
                                        <div><a href='/Blog2'><h6>Importance of Regular</h6>Nov 19, 2023</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Link href='/Blog1'><div className="side-news-img1"></div></Link>
                                    </div>
                                    <div className="col-6">
                                        <div><a href='/Blog1'><h6>Care for Your Car</h6> Nov 19, 2023</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="blog-card">
                                <div className="blog-card-img4"></div>
                                <div className="card-date">
                                    
                                    <span>4  <span>Dec</span></span>
                                </div>
                                <div className="card-head">
                                    <span>Care for Your Car</span>
                                </div>
                                <div className="card-comment">
                                    <div>
                                        <i className="fa-regular fa-comment-dots"></i>
                                        <a href="#">1 Comment</a>
                                    </div>
                                    <div>
                                        <Link href="/Blog1">Read More</Link>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
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

export default Blog
