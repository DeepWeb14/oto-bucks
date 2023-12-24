import React from 'react'
import Link from 'next/link';



function page() {
  return (
    <>
    <section>
        <div className="container my-lg-4 my-4 text-center">
            <h1>OTO Vehicle <span>Solutions</span></h1>
            <div className="row mt-lg-4 my-4 ">
                <div className="col-lg-4">
                    <div className="oto-card mb-2">
                        <img src="images/car 02.512079b8d93607ee874a.jpeg" alt="" />
                        <div className="oto-card-link text-center">
                            <Link href="/Register">Buy & Sell Car</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="oto-card mb-2">
                        <img src="images/booka-car.e908fa7e0e36a41a8134.jpg" alt="" />
                        <div className="oto-card-link text-center">
                            <Link href="/Register">Book A Car</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="oto-card mb-2">
                        <img src="images/car repair 03.e0287630997af035406c.jpeg" alt=""/>
                        <div className="oto-card-link text-center">
                            <Link href="/Register">Auto Repair</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container my-lg-4 my-4  text-center">
            <h1>OTO Home <span>Solutions</span></h1>
            <div className="row mt-lg-4 my-4 ">
                <div className="col-lg-4">
                    <div className="oto-card mb-2">
                        <img src="images/download.jpg" alt="" />
                        <div className="oto-card-link text-center">
                            <a href="/Register">Home Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default page
