import React from 'react';
import { Link } from "react-router-dom";

const Film = (props) => {

    return (

        <div className="col-lg-6">
            <div className="card text-center">
                <div className="card-header">
                    <h3>{props.film.title} </h3></div>
                <div className="card-body">
                    <p className="card-text">{props.film.description}</p>
                    {/*<p className="card-text">Film id: {props.film.id} </p>*/}
                    <button class="btn btn-danger cardbtn"><Link to={"films/" + props.film.id}>More Info</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Film;