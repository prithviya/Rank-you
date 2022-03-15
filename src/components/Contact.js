import React from 'react';
import Banner from '../image/service.jpg';
function Contact() {
  return (
    <div>
      <div>
          <div class="">
            <img src={ Banner } alt="abt_banner image" width="100%" height="auto" />
          </div>
      </div>
        <section id="contact">
            <div class="contact-box">
                <div class="contact-links">
                <h2 className='custom-contact-title'>Get In Touch</h2>
                <p className='text-center custom-color-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
                <div class="links">
                    <div class="link">
                      <a href="https://twitter.com/Ranku_higher" target="_blank">
                        <div className='custom-contact-us'>
                          <img src="https://img.icons8.com/ios-filled/30/4a90e2/twitter.png" alt="twitter"/>
                        </div>
                      </a>
                    </div>
                    <div class="link">
                      <a href="https://www.instagram.com/ranku_higher/" target="_blank">
                        <div className='custom-contact-us'>
                        <img src="https://img.icons8.com/ios-filled/30/4a90e2/instagram-new--v1.png" alt="insta"/>
                        </div>
                      </a>
                    </div>
                    <div class="link">
                      <a href="https://www.linkedin.com/in/rank-you-higher-7482ab1b6/" target="_blank">
                        <div className='custom-contact-us'>
                        <img src="https://img.icons8.com/ios-filled/30/4a90e2/linkedin.png" alt="linkedin"/>
                        </div>
                      </a>
                    </div>
                    <div class="link">
                      <a href="https://www.facebook.com/rankuhigher2020/" target="_blank">
                        <div className='custom-contact-us'>
                        <img src="https://img.icons8.com/ios-filled/30/4a90e2/facebook-new.png" alt="fb"/>
                        </div>
                      </a>
                    </div>
                </div>
                </div>
                <div class="contact-form-wrapper">
                <form>
                    <div class="form-item">
                    <input type="text" name="sender" required />
                    <label>Name:</label>
                    </div>
                    <div class="form-item">
                    <input type="text" name="email" required />
                    <label>Email:</label>
                    </div>
                    <div class="form-item">
                    <textarea class="" name="message" required></textarea>
                    <label>Message:</label>
                    </div>
                    <button class="submit-btn">Send</button>  
                </form>
                </div>
            </div>
            </section>
    </div>
  )
}

export default Contact