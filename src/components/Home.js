import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Home extends Component {
    static propTypes = {}
    render()
     {
        return (
            <div >
                <br />
                <div className="container">
                <div class="row">
                        <div class="col">
                            <div class="card">
                                <img src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2021/02/shutterstock_544348294-1-1038x778.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text"><center>Find Medicine</center></p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
  
                                <img src="http://www.sciencefriday.com/wp-content/uploads/2016/12/shutterstock_526242388.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text"><center>Set Reminder</center></p>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                        <div class="card">
                       
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TQwSzj_QYuSK3ZE2Rz2YX1umN11uLB6F_A&usqp=CAU" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <p class="card-text"><center>Set Reminder</center> </p>
                                    </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )}

}

export default Home