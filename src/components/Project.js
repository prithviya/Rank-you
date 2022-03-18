import React from 'react';
import Rathinam from '../image/project/rathinam-group.png';
import Fluid from '../image/project/fluid.png';
import Art from '../image/project/arc.png'

function Project() {
  return (
    <div>
      <h1 className='cust-title text-center pt-5 text-uppercase underline'>Successful project</h1>
    <div className='container pt-5 pb-5'>
    <p className='text-center pb-3'>We give a unique set of coordinated activities, with a definite starting and finishing  points,<br/> undertaken by an individual or organizationto meet specific objectives within <br/> defined schedule, cost and performance parameters. </p>
      <div className='row'>
        <div className='col-md-4 custom-pro-pic'>
          <div class="pic">
            <img src={Rathinam} alt="" />
            <div class="text-block">
              <h4 className='m-2' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</h4>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title custom-text" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p className='custom-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero elit, viverra vitae metus id, pellentesque sollicitudin lacus. Integer dignissim pretium metus, at ultricies elit lobortis quis. Praesent non semper lacus. 
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div class="pic">
            <img src={Fluid} alt="" />
            <div class="text-block">
              <h4 className='m-2' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1">View More</h4>
              <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title custom-text" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p className='custom-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero elit, viverra vitae metus id, pellentesque sollicitudin lacus. Integer dignissim pretium metus, at ultricies elit lobortis quis. Praesent non semper lacus. 
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
        <div className='col-md-4'>
          <div class="pic">
            <img src={Art} alt="" />
            <div class="text-block">
              <h4 className='m-2' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2">View More</h4>
              <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title custom-text" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p className='custom-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero elit, viverra vitae metus id, pellentesque sollicitudin lacus. Integer dignissim pretium metus, at ultricies elit lobortis quis. Praesent non semper lacus. 
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
    </div>
  )
}

export default Project