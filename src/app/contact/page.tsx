import React from 'react';

function contact() {
  return (
    <>
    <section id="contact" className="contact section">

      
      <div className="container section-title" >
        <h2>Contact</h2>
        <p>I am a passionate developer always eager to collaborate and learn. 
          Reach out if you want to chat about projects, code, or tech!</p>
      </div>

      <div className="container" >

        <div className="row gy-4">

          <div className="col-lg-5">

            <div className="info-wrap">
              <div className="info-item d-flex" >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>
                    Tirupati Park 1, 150ft. ring road,<br/>
                    Rajkot-360004,<br />
                    Gujarat,
                    India.
                  </p>

                </div>
              </div>

              <div className="info-item d-flex" >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+91 90543 61323
                  </p>
                </div>
              </div>

              <div className="info-item d-flex" >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>drashtirathod77@gmail.com</p>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-7">
            <form
              action="https://formsubmit.co/drashtirathod77@gmail.com"
              method="POST"
              className="php-email-form"
            >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <div className="row gy-4">

                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required/>
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required/>
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required/>
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows={10} id="message-field" required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
    </>
  )
}

export default contact