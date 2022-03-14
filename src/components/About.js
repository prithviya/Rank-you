import React from 'react';
import Banner from '../image/abt.jpg';
import Abut from '../image/about.jpg';
function About() {
  return (
    <div>
      <div>
          <div class="">
            <img src={ Banner } alt="abt_banner image" width="100%" height="auto" />
          </div>
      </div>
        <h1 className='cust-title text-center pt-5 text-uppercase underline'>Who We Are?</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 pt-4'>
            <img src={Abut} alt="about image" width="500" height="300"/>
          </div>
          <div className='col-md-6 pt-4'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className='cust-title text-center pt-5 text-uppercase underline'>What we do?</h1>
        <div class="container my-5">
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
                  <div class="row our-offer-items less-carousel">
                      
                      <div class="col-md-4 col-sm-6 equal-height">
                          <div class="item">
                          <i class="fa fa-search" aria-hidden="true"></i>
                              <h4>SEO</h4>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              </p>
                          </div>
                      </div>
                    
                      <div class="col-md-4 col-sm-6 equal-height">
                          <div class="item">
                          <i class="fa fa-file-video-o" aria-hidden="true"></i>
                              <h4>SMO</h4>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              </p>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6 equal-height">
                          <div class="item">
                                <i class="fa fa-cubes" aria-hidden="true"></i>
                              <h4>SEM</h4>
                              <p>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                              </p>
                          </div>
                      </div>                    
                  </div>
          </div>
      </section>
        </div>
      </div>
      <div>
      <h1 className='cust-title text-center pt-5 text-uppercase underline'>Our Strength</h1>
      <section id="cards">
          <div class="container py-2">
              <div class="row">
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Mehala</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">DM Manager</p>
                                  
                                  <p class="small text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                      quia commodi.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Vinothini</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">DM Specialist</p>
                                  
                                  <p class="small text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                      quia commodi.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Bala Murugan</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">SEO Analyst</p>
                                  
                                  <p class="small text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                      quia commodi.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src="https://i.picsum.photos/id/836/130/130.jpg?hmac=Sot_REUw5W-XSuE6FmCjT9JenhZfiNqZYs3AQbfrZsc" class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Saranya</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">DM Trainee</p>
                                  
                                  <p class="small text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                      quia commodi.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name mt-3">Raj Kumar</h5>
                                  <p class=" text-capitalize text-muted small mt-2 blockquote-footer">Sr Web Developer</p>
                                  
                                  <p class="small text-muted mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                      quia commodi.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                          <div class="card-body">
                              <div class="user-picture">
                                  <img src="https://images.unsplash.com/photo-1582003457856-20898dd7e1ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130" class="shadow-sm rounded-circle" height="130" width="130" />
                              </div>
                              <div class="user-content">
                                  <h5 class="text-capitalize user-name">Geetha</h5>
                                  <p class=" text-capitalize text-muted small blockquote-footer mt-2">Jr Web developer</p>
                                  
                                  <p class="small text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae commodi! Distinctio praesentium, debitis aut minima doloribus earum
                                      quia commodi.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </div>
    </div>  
  )
}

export default About