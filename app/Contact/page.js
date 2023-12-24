
import React from 'react'

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
function Contact() {


  return (
    <>
<Header />
      <section>
        <div className="container-fluid contact_img">
        </div>
      </section>


      {/* <!-- ==contact== --> */}

      <section className="contact my-5">
        <div className="container">
          <div className="row">
            
          <div className="col-lg-6 mt-4 contect-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d231084.2678723368!2d55.29289129279354!3d25.179886321119454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1703023474517!5m2!1sen!2sus" 
           style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-lg-6 mt-5">
              <form>
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Message" />
                <button className="btn-web org-btn mt-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
