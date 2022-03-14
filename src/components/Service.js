import React from 'react';
import Banner from '../image/service.jpg'
import Work from '../image/work.png'

function Service() {
  return (
    <div>
      <div class="">
        <img src={ Banner } alt="abt_banner image" width="100%" height="auto" />
      </div>
       <div class="feat bg-gray pb-5">
          <div class="container">
            <div class="row">
              <div class="section-head col-sm-12">
              <h1 className='cust-title text-center pt-5 text-uppercase underline'>What we do for you?</h1>
                <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's<br/>standard dummy text ever since the 1500s, when an unknown book.</p>
              </div>
              <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-certificate" aria-hidden="true"></i></span>
                  <h6>Branding</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  <h6>Email Marketing</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-comments" aria-hidden="true"></i></span>
                  <h6>SMS Marketing</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
                  <h6>Traditional Marketing</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-file-text" aria-hidden="true"></i></span>
                  <h6>Content Marketing</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
              <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                  <h6>Event Management</h6>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-bg'>
          <h1 className='cust-title text-center pt-5 text-uppercase underline'>How it Works?</h1>
          <div className="container">
            <div className='row mt-5'>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>Goal & objective</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-futbol-o" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>Idenfity Customer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-info-circle" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>Competitor Research</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-code-fork" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>SEM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-search" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>SMM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-film" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>Email Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-envelope-o" aria-hidden="true"></i> 
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>Content Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-file-code-o" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>Mobile Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-mobile" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
              <div className='col-md-4'>
                <figure class="snip1401 hover"><img src={Work} alt="sample93" />
                  <figcaption>
                    <h3>Measure Result</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                  </figcaption><i class="fa fa-file-text-o" aria-hidden="true"></i>
                  <a href="#"></a>
                </figure>
              </div>
            </div>
          </div>
        </div>  
    </div>
  )
}

export default Service