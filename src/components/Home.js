import React from 'react';
import seo from "../image/seo.gif";
import Typical from 'react-typical';
import Abt from '../image/home-abt.png';
import Geetha from '../image/profile/geetha.png'
import 'react-carousel-responsive/dist/styles.css';
import Vino from '../image/profile/vino.png';
import Mehala from '../image/profile/meghala.png';
import Gowtham from '../image/profile/gowtham-bala.png';
import Saran from '../image/profile/saranya.png';
import Raj from '../image/profile/raj.png';

function Home() {
  return (
    <div>
      <div className='custom-home-bg pt-5 pb-5'>
        <div class="container">
          <div class="row">
            <div class="col-md-6 p-2">
              <img src={seo} alt="gif-imag-banner" width= "100%" height="100%"/>
            </div>
            <div class="col-md-6 pt-2">
              <div id="container">
                <h3 className='custom-typical-section'>
                  We are Providing Huge Services in
                  <span id="custom-type-color"><Typical
                    steps={['Search Engine Optimization', 500, 'Social Media Marketing', 800, 'Search Engine Marketing', 1500, 'Digital Marketing', 2300,]}
                    loop={Infinity}
                    wrapper="p"
                  /></span>               
                 Our Company
                </h3> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h1 className='cust-title text-center pt-5 text-uppercase underline'>About Us</h1>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-md-8'>
              <div class="custom-home-container">
                <p className='p-4'>
                Digital marketing is a huge platform that connect potential customers using digital communication and other forms. We also focus on <i>advertising a product, person, Content marketing , Influencer Marketing , Campaign Marketing , e- commerce Marketing , Social  Media Marketing , Display advertising</i> etc.. 
                </p>
                <p  className='p-4 pt-0'>
                  Digital Marketing is also called as “Online Marketing”.It leads the world to the next level of marketing .We have boundless system of channels while modern marketers just onboard their brands advertising online in order to achieve the vast of Digital Marketing. </p>
                  <a href="/about">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Read More</span>
                    </button>
                  </a>
              </div>
            </div>
            <div className='col-md-4'>
              <img src={ Abt } alt="about-image" id="" width="100%"/>
            </div>
          </div>
        </div>
      </div>
      <div className='pb-5'>
        <h1 className='cust-title text-center pt-5 text-uppercase underline'>Project</h1>
        <div className='container custom-body pt-5'>
          <div className='row'>
            <div className='col-md-4'>
              <div class="custom-home-servicecard">
                <div class="card_content">
                  <div class="card_icon pt-4">
                  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-seo-marketing-technology-flaticons-lineal-color-flat-icons.png"/>
                  </div>
                  <div class="card_body">
                    <h3 className='custom-home-service'>
                      Search Engine Optimization 
                    </h3>
                    <span className='custom-serv-subtext'><i>(SEO)</i></span>
                  </div>
                </div>
                <div class="card_layout"></div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class="custom-home-servicecard">
                <div class="card_content">
                  <div class="card_icon pt-4">
                  <img src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-social-media-marketing-online-business-photo3ideastudio-lineal-color-photo3ideastudio.png"/>
                  </div>
                  <div class="card_body">
                    <h2 className='custom-home-service'>
                      Social Media Marketing 
                    </h2>
                    <span className='custom-serv-subtext'><i>(SMM)</i></span>
                  </div>
                </div>
                <div class="card_layout"></div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class="custom-home-servicecard">
                <div class="card_content">
                  <div class="card_icon pt-4">
                    <img src="https://img.icons8.com/external-filled-outline-wichaiwi/64/000000/external-marketing-digital-marketing-filled-outline-wichaiwi.png"/>
                  </div>
                  <div class="card_body">
                    <h2 className='custom-home-service'>
                      Search Engine Marketing 
                    </h2>
                    <span className='custom-serv-subtext'><i>(SEM)</i></span>
                  </div>
                </div>
                <div class="card_layout"></div>
              </div>
            </div>
          </div>
            <div className='custom-align-center pt-5'>
              <a href="/service">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Read More</span>
                </button>
              </a>
            </div>  
        </div>
      </div>
      {/* our team */}
      <div>
      <h1 className='cust-title text-center pt-5 text-uppercase underline'>Our Strength</h1>
      <section id="cards">
          <div class="container py-2">
              <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src={ Mehala } class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Mehala</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">DM Manager</p>
                                  
                                  <p class="small text-muted mt-3">Leads a team that oversees a variety of digital marketing programs.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src={Vino} class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Vinothini</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">DM Specialist</p>
                                  
                                  <p class="small text-muted mt-3">She who delivers marketing campaigns to assist the company's expansion and growth.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src={Gowtham} class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Bala Murugan</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">SEO Analyst</p>
                                  
                                  <p class="small text-muted mt-3"> A Guy who oversees the Search Engine Optimization <i>(SEO)</i> activities.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src={Saran} class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Saranya</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">DM Trainee</p>
                                  
                                  <p class="small text-muted mt-3">Maintains our social media presence and Collaborates with internal teams.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src={Raj} class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Raj Kumar</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">Sr Web Developer</p>
                                  
                                  <p class="small text-muted mt-3">Prioritizing software development projects, setting timelines and assigning tasks to team members.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src={Geetha} class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Geetha</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">Jr Web Developer</p>
                                  
                                  <p class="small text-muted mt-3">Creation of websites and updating existing web applications using scripting languages.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </div>
      <div>
      
      {/* testimonial */}
        <div className=''>
          <h1 className='cust-title text-center pt-5 text-uppercase underline'>testimonials</h1>  
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-12'>
              <div class="pn_testimonial_box mt-4">
                    <p class="text-justify"> It felt like having an experienced team on our side which  helped us develop our idea and our first investment .
</p>

                    <div class="row pt-3">
                        <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_1.svg" class="border-radius-12 float-right" alt="client image" /> <span> Charles Boyle </span> </div>
                        <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="client stars image" /> </div>
                    </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12'>
              <div class="pn_testimonial_box mt-4">
                    <p class="text-justify">We developed a great partnership with rankuhigher and their dedication to our websites evident  in all aspects of our site. 
</p>
                    <div class="row pt-3">
                        <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_2.svg" class="border-radius-12 float-right" alt="client image" /> <span> Gina Lannety </span> </div>
                        <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="client stars image" /> </div>
                    </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12'>
              <div class="pn_testimonial_box mt-4">
                    <p class="text-justify">Thanks to upflow, we are able to gain real- time visibility into our customer debt and follow up on unpaid invoices if necessary.
 </p>
                    <div class="row pt-3">
                        <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_3.svg" class="border-radius-12 float-right" alt="client image" /> <span> Dug Judey </span> </div>
                        <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="stars image" /> </div>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home