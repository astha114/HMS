import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FindMedicine extends Component {
    static propTypes = {}
    render()
     {
        return (
            <div >
                <center><h1>Find Medicine</h1></center>
                <br />
                <div className="container">
                    <hr />
                    <div class="row">
                        <div class="col">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Paracetamol </h5>
                                <p class="card-text">Price : ₹ 10.00. Unit: 650mg. </p>
                                <p class="card-text">Quantity : 10 Tablets</p>
                                <p class="card-text">Manufacturer : Cipla Limited</p>
                                <a href="#" class="btn btn-primary mx-2">Buy</a>
                                <a href="#" class="btn btn-primary">Alternative</a>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Dolo - Soft MR  Capsule</h5>
                                <p class="card-text">Price : ₹ 47.00. Unit: 100mg/2mg</p>
                                <p class="card-text">Quantity : 10 Tablets</p>
                                <p class="card-text">Manufacturer : Gujarat Liqui Pharmacaps Pvt.</p>
                                <a href="#" class="btn btn-primary mx-2">Buy</a>
                                <a href="#" class="btn btn-primary">Alternative</a>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Asprin Tablet</h5>
                                <p class="card-text">Price : ₹ 2.70 Unit: 50mg</p>
                                <p class="card-text">Quantity : 14 Tablets</p>
                                <p class="card-text">Manufacturer : Zydus Cadila.</p>

                                <a href="#" class="btn btn-primary mx-2">Buy</a>
                                <a href="#" class="btn btn-primary">Alternative</a>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <br />
                    <div class="row">
                        <div class="col">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Medicine Name</h5>
                                <p class="card-text">price:</p>
                                <p class="card-text">Manufacturer:</p>
                                <a href="#" class="btn btn-primary mx-2">Buy</a>
                                <a href="#" class="btn btn-primary">Alternative</a>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Medicine Name</h5>
                                <p class="card-text">price:</p>
                                <p class="card-text">Manufacturer:</p>
                                <a href="#" class="btn btn-primary mx-2">Buy</a>
                                <a href="#" class="btn btn-primary">Alternative</a>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Medicine Name</h5>
                                <p class="card-text">price:</p>
                                <p class="card-text">Manufacturer:</p>
                                <a href="#" class="btn btn-primary mx-2 ">Buy</a>
                                <a href="#" class="btn btn-primary">Alternative</a>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        )}

}

export default FindMedicine