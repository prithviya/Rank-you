import React from 'react';
import Logo from '../image/logo.webp'

function Footer() {
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>Rathinam Techzone Campus,<br/>
Pollachi Road,<br/> Eachanari</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span><a className='makecall' href="tel:+919585380011">+91 95853 80011</a></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span><a href='mailto:ryh.digitalservices@gmail.com' className='makecall'>ryh.digitalservices@gmail.com</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html">
                                  <img src={ Logo } alt=""/>
                                </a>
                            </div>
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/rankuhigher2020/" target="_blank"><i class="fa fa-facebook custom-icon-bg"></i></a>
                                <a href="https://twitter.com/Ranku_higher" target="_blank"><i class="fa fa-twitter custom-icon-bg"></i></a>
                                <a href="https://www.linkedin.com/in/rank-you-higher-7482ab1b6/"  target="_blank"><i class="fa fa-linkedin custom-icon-bg"></i></a>
                                <a href="https://www.instagram.com/ranku_higher/" target="_blank"><i class="fa fa-instagram custom-icon-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li><br/>
                                <li><a href="#">About Us</a></li><br/>
                                <li><a href="#">Services</a></li><br/>
                                <li><a href="#">Project</a></li><br/>
                                <li><a href="#">Contact</a></li>                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                {/* <form action="#">
                                    <input type="text" placeholder="Email Address">
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 pb-2 text-center">
                        <div class="copyright-text">
                            <p>2022 © Copyright All rights Reserved.</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer