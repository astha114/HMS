import React, { Component } from "react";
import PropTypes from "prop-types";

export class Reminder extends Component {
  static propTypes = {};
  render() {
    return (
        
        <div>
            <br />
            <center><h1>Set Reminder</h1></center>
            <br />
            <div className="container">
            <hr />
            <center><h4>Monday</h4></center>
                <div class="alert alert-primary" role="alert">
                        
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Take Medicine1
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label class="form-check-label" for="flexCheckChecked">
                            <s>Take Medicine2</s> 
                            {/* <p style="text-align:right">h</p> */}
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label class="form-check-label" for="flexCheckChecked">
                                <s>Take Medicine3</s> 
                            </label>
                        </div>
                        <center><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +</button></center>
                        {/* <center><button type="button" class="btn btn-primary">+</button></center> */}

                        {/* Modal */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Set Reminder</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" class="form-control"/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                </div>
                <br />
                <hr />
                <center><h4>Tuesday</h4></center>
                <div class="alert alert-primary" role="alert">
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Take Medicine1
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Take Medicine1
                                </label>
                        </div>
                        <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Take Medicine1
                                </label>
                        </div>
                        <center><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +</button></center>
                </div>
            </div>
        </div>
    );
  }
}


export default Reminder;
