import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div id="header" className="container-fluid" style={{paddingBottom:'15px'}}>
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={logo} alt="Logo" className="logo" />
                        </div>
                        <div className="col-lg-3 d-flex">
                            <Link to="/"
                                  className="btn btn-outline-danger"
                            >Go Home</Link>
                        </div>
                        <div className="col-lg-3 d-flex">
                            <Link to="/films"
                                  className="btn btn-outline-danger"
                            >Load Films</Link>
                        </div>
                        <div className="col-lg-3 d-flex">
                            <Link to="/people"
                                  className="btn btn-outline-danger"
                            >Load People</Link>
                        </div>
                    </div>
                </div>
                <div className="jumbotron" style={{backgroundColor:'#024F6D', color: 'white'}}>
                    <h5 style={{textAlign:'center'}}>This project was developed with ReactJS and working with an API to consume data.  </h5>
                    <p style={{textAlign:'center'}}>Studio Ghibli is the largest anime film studio in the world. They have an extensive database
                        created to help users discover resources, consume them via HTTP requests, and interact with them in whatever way makes sense at <a href="https://ghibliapi.herokuapp.com">https://ghibliapi.herokuapp.com</a>. </p>
                    {/*<p></p>*/}
                </div>
            </Fragment>
        )
    }
};

