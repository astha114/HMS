import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MedicalRecords extends Component {
    static propTypes = {}
    render()
     {
        return (
            <div >
                <br />
                <h1>  <center>Medical Records</center>  </h1> 
                <br />
                <hr />
                <br /> 
                <div className="container-sm">
                    <div class="alert alert-secondary" role="alert">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                Name: Jhon
                                </div>
                                <div class="col">
                                Gender: Male
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                Age: 28 y/o
                                </div>
                                <div class="col">
                                Allergies: None
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            8th July, 2022
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Medanta Hospital</h5>
                            <p class="card-text">Diagnosis:Acute Flaccid Myelitis (AFM) Alphaviruses </p>
                            <p class="card-text">Doctor: Dr. Robert </p>
                            <a href="#" class="btn btn-primary">Explore</a>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-header">
                            21st April, 2022
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Fortis Hospitals Group</h5>
                            <p class="card-text">Diagnosis: </p>
                            <p class="card-text">Doctor: </p>
                            <a href="#" class="btn btn-primary">Explore</a>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-header">
                            2nd December, 2021
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Fortis Hospitals Group</h5>
                            <p class="card-text">Diagnosis:</p>
                            <p class="card-text">Doctor:</p>
                            <a href="#" class="btn btn-primary">Explore</a>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-header">
                            13th June, 2021
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Narayana Health Hospital</h5>
                            <p class="card-text">Diagnosis:</p>
                            <p class="card-text">Doctor:</p>
                            <a href="#" class="btn btn-primary">Explore</a>
                        </div>
                    </div>
                </div>
                
            </div>
        )}

}

export default MedicalRecords