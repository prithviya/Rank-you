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
              <img src={seo} alt="gif-imag-banner" width= "100%" height="auto"/>
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
      <div className='section-bg pb-5'>
        <h1 className='cust-title text-center pt-5 text-uppercase underline'>Our SEO Services</h1>
        <div className='container custom-body pt-4'>
          <div className='row'>
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper one">
                <div class="card-header">
                  <img src="https://img.icons8.com/external-smashingstocks-outline-color-smashing-stocks/40/000000/external-web-analysis-seo-and-marketing-smashingstocks-outline-color-smashing-stocks.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">Web Site <br/>Analysis</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>01</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper two">
                <div class="card-header">
                  <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/40/000000/external-keyword-seo-and-media-flatart-icons-lineal-color-flatarticons.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">Key Word Research</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>02</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper three">
                <div class="card-header">
                  <img src="https://img.icons8.com/external-ddara-lineal-color-ddara/40/000000/external-competitor-digital-marketing-ddara-lineal-color-ddara.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">competitor analysis</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>03</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper four">
                <div class="card-header">
                <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/40/000000/external-find-on-page-data-science-smashingstocks-mixed-smashing-stocks.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">on page Optimization</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>04</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>            
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper three">
                <div class="card-header">
                  <img src="https://img.icons8.com/external-justicon-lineal-color-justicon/40/000000/external-blog-graphic-design-justicon-lineal-color-justicon.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">Blog <br/>Submission</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>05</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper four">
                <div class="card-header">
                  <img src="https://img.icons8.com/doodle/40/000000/book-shelf--v1.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">social book marketing</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>06</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper two">
                <div class="card-header">
                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-press-release-public-relations-agency-flaticons-lineal-color-flat-icons.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">Press<br/> Releases</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>07</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper one">
                <div class="card-header">
                  <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/40/000000/external-article-copywriting-itim2101-lineal-color-itim2101.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">Article <br/>Submission</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>08</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper two">
                <div class="card-header">
                  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/000000/external-directory-gdpr-icons-flaticons-lineal-color-flat-icons.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">Directory<br/>Submission</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>09</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper one">
                <div class="card-header">
                  <img src="https://img.icons8.com/external-nawicon-outline-color-nawicon/40/000000/external-backlink-seo-and-marketing-nawicon-outline-color-nawicon.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">BackLink<br/>building</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>10</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 custom-home-servicecard1'>
              <div class="card-wrapper three">
                <div class="card-header">
                <img src="https://img.icons8.com/external-konkapp-outline-color-konkapp/40/000000/external-report-marketing-and-growth-konkapp-outline-color-konkapp.png"/>
                  <h2 class="card-header-text1">business</h2>
                  <h1 class="card-header-text2">Ranking <br/>Report</h1>
                </div>
                <div class="card-footer">
                  <div class="footer-content-wrap">
                    <div class="footer-text-wrap">
                      <h1>11</h1>
                      <p>step</p>
                    </div>
                    <i class="fa fa-angle-double-right"></i>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* our team */}
      <div>
      <h1 className='cust-title text-center pt-5 text-uppercase underline'>Our Organization</h1>
      <div className='container pt-4 pb-5'>
        <div className='row'>
          <div className='col-md-4 col-sm-12'>
            <figure class="snip1473">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
              <figcaption>
                <blockquote>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </blockquote>
              </figcaption>
              <h3>Hans Down<span>Engineer</span></h3>
            </figure>
          </div>
          <div className='col-md-4 col-sm-12'>
            <figure class="snip1473 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg" alt="profile-sample7" class="profile" />
              <figcaption>
                <blockquote>Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius.</blockquote>
              </figcaption>
              <h3>Wisteria Widget<span>Photographer</span></h3>
            </figure>
          </div>
          <div className='col-md-4 col-sm-12'>
            <figure class="snip1473"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample9.jpg" alt="profile-sample9" class="profile" />
              <figcaption>
                <blockquote>Sorry to say but if you want to stay dad you've got to polish your image. I think the image we need to create for you is "repentant but learning".</blockquote>
              </figcaption>
              <h3>Desmond Eagle<span>Accountant</span></h3>
            </figure>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 col-sm-12'>
            <figure class="snip1473">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
              <figcaption>
                <blockquote>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </blockquote>
              </figcaption>
              <h3>Hans Down<span>Engineer</span></h3>
            </figure>
          </div>
          <div className='col-md-4 col-sm-12'>
            <figure class="snip1473 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg" alt="profile-sample7" class="profile" />
              <figcaption>
                <blockquote>Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's misunderstood about you? Calvin: Nobody thinks I'm a genius.</blockquote>
              </figcaption>
              <h3>Wisteria Widget<span>Photographer</span></h3>
            </figure>
          </div>
          <div className='col-md-4 col-sm-12'>
            <figure class="snip1473"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample9.jpg" alt="profile-sample9" class="profile" />
              <figcaption>
                <blockquote>Sorry to say but if you want to stay dad you've got to polish your image. I think the image we need to create for you is "repentant but learning".</blockquote>
              </figcaption>
              <h3>Desmond Eagle<span>Accountant</span></h3>
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