import React from 'react';
import Banner from '../image/abt.jpg';
import Abut from '../image/about.jpg';
import Anand from '../image/profile/anand.png';
import Sakthi from '../image/profile/sakthi.png';


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
            <p>Digital is the core of everything today. We have been in the Digital Marketing business for more than a decade and it continues. We are specialized in your digital marketing goals I.e to increase your brand awarness and to achieve more sales. Our marketing channel helps to achieve your goal and sales at the starting point. </p>
            <p>We direct marketing which links consumers with sellers electronically using interactive technologies like emails,website,online forums,news group,interactive television etc..For the past 15 years ,smart insights has specialized in helping marketers learn more structured, strategic and data –driven approach to digital marketing.</p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className='cust-title text-center pt-5 text-uppercase underline'>What we do?</h1>
        <div class="container my-5">
            <p className='text-center pb-3'>Turn your Business into a Brand. We provide a fail-safe and progressive techniques<br></br> which turns your visitors into your customers. </p>
        <section class="we-offer-area text-center bg-gray">
          <div class="container">
                <div class="row our-offer-items less-carousel">
                    
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fa fa-search" aria-hidden="true"></i>
                            <h4>SEO</h4>
                            <p>
                            we optimize Search engines and Amplify it across various channels to attain higher visibility and receive a steady stream of traffic. 
                            </p>
                        </div>
                    </div>
                
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                        <i class="fa fa-file-video-o" aria-hidden="true"></i>
                            <h4>SMO</h4>
                            <p>
                            We provide a four stage process by understanding the audience through various listening tools to create customized solutions.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fa fa-cubes" aria-hidden="true"></i>
                            <h4>SEM</h4>
                            <p>
                            We identify and capture the attention of potential customers through identifying best- suited channels and setting optimal budgets.
                            </p>
                        </div>
                    </div>                    
                </div>
          </div>
        </section>
        </div>
      </div>
      <div>
        <h1 className='cust-title text-center pt-5 text-uppercase underline'>Our Team</h1> 
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <figure class="snip1192">
                        <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
                        <div class="author">
                            <img src={ Anand } alt="sq-sample1"/>
                            <h5>Pelican Steve <span> LittleSnippets</span></h5>
                        </div>
                    </figure>
                </div>
                <div className='col-md-4'>
                    <figure class="snip1192">
                        <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
                        <div class="author">
                            <img src={ Sakthi } alt="sq-sample1"/>
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
      </div>
    </div>  
  )
}

export default About