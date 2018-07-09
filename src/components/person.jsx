import React, {Fragment, Component}  from 'react';
import { Link } from "react-router-dom";

const Person = (props) => {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //
    //     };
    // }
    //console.log(props);
    return (
        <Fragment>

                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="text-center">{props.person.name}</h5>
                        </div>
                        <div className="card-body">

                            <div className="split">
                                <div>
                                    <p className="card-text">Age: {props.person.age}</p>
                                    <p className="card-text">Eye Color: {props.person.eye_color}</p>
                                </div>
                                <div>
                                    <p className="card-text">Hair Color: {props.person.hair_color}</p>
                                    <p className="card-text">Gender: {props.person.gender}</p>
                                </div>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <a href={props.person.url} className="btn btn-secondary">Link to JSON Response</a>
                            <button class="btn btn-danger cardbtn"><Link to={"people/" + props.person.id}> More Info </Link></button>
                            </div>
                            </div>
                    </div>
                </div>

        </Fragment>
    );
}

export default Person;