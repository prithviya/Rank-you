import React from 'react';
import seo from "../image/seo.gif";
import Typical from 'react-typical';
import Abt from '../image/home-abt.png';

function Home() {
  return (
    <div>
      <div className='custom-home-bg pt-5 pb-5'>
        <div class="container">
          <div class="row">
            <div class="col-md-6 p-2">
              <img src={seo} alt="gif-imag-banner" width= "100%" height="80%"/>
            </div>
            <div class="col-md-6 pt-2">
              <div id="container">
                <h3 className='custom-typical-section'>
                  We are Providing Huge Services in
                <Typical
                    steps={['Search Engine Optimization', 500, 'Social Media Marketing', 800, 'Search Engine Marketing', 1500, 'Digital Marketing', 2300,]}
                    loop={Infinity}
                    wrapper="p"
                  /> our company
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
      <h1 className='cust-title text-center pt-5 text-uppercase underline'>Our contingent</h1>
      <div className='container pt-4 pb-5'>
        <div className='row'>
          <div className='col-md-4'>
            <figure class="snip1192">
              <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
              <div class="author">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
                <h5>Pelican Steve <span> LittleSnippets</span></h5>
              </div>
            </figure>
          </div>
          <div className='col-md-4'>
            <figure class="snip1192">
              <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
              <div class="author">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
                <h5>Pelican Steve <span> LittleSnippets</span></h5>
              </div>
            </figure>
          </div>
          <div className='col-md-4'>
            <figure class="snip1192">
              <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
              <div class="author">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
                <h5>Pelican Steve <span> LittleSnippets</span></h5>
              </div>
            </figure>
          </div>
          <div className='col-md-4'>
            <figure class="snip1192">
              <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
              <div class="author">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
                <h5>Pelican Steve <span> LittleSnippets</span></h5>
              </div>
            </figure>
          </div>
          <div className='col-md-4'>
            <figure class="snip1192">
              <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
              <div class="author">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
                <h5>Pelican Steve <span> LittleSnippets</span></h5>
              </div>
            </figure>
          </div>
          <div className='col-md-4'>
            <figure class="snip1192">
              <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
              <div class="author">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
                <h5>Pelican Steve <span> LittleSnippets</span></h5>
              </div>
            </figure>
          </div>

        </div>
      </div>
      {/* testimonial */}
        <div className=''>
          <h1 className='cust-title text-center pt-5 text-uppercase underline'>testimonials</h1>  
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-12'>
              <div class="pn_testimonial_box mt-4">
                    <p class="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
</p>

                    <div class="row pt-3">
                        <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_1.svg" class="border-radius-12 float-right" alt="client image" /> <span> Charles Boyle </span> </div>
                        <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="client stars image" /> </div>
                    </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12'>
              <div class="pn_testimonial_box mt-4">
                    <p class="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
</p>
                    <div class="row pt-3">
                        <div class="col-md-6 pn_review_profile"><img src="https://desklib.com/static/src/assets/images/v2/profile_2.svg" class="border-radius-12 float-right" alt="client image" /> <span> Gina Lannety </span> </div>
                        <div class="col-md-6 pn_review_rating d-flex justify-content-end"> 5 &nbsp; <img class="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="client stars image" /> </div>
                    </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12'>
              <div class="pn_testimonial_box mt-4">
                    <p class="text-justify">What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.
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