import React from 'react';
import seo from "../image/seo.gif";

function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <img src={seo} alt="gif-imag-banner" width= "500" height="500"/>
        </div>
        <div class="col-md-5">
                <div id="container">
                    Make 
                    <div id="flip">
                      <div><div>wOrK</div></div>
                      <div><div>lifeStyle</div></div>
                      <div><div>Everything</div></div>
                    </div>
                    AweSoMe!
                  
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home