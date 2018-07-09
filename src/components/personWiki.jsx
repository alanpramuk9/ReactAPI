import React, { Fragment, Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class PersonWiki extends Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
            .then(res => res.json())
            .then(person => {
                this.setState({ people: person });
            });
    }

    render() {
        console.log(this.state);
        return (
            <Fragment>
            <div className="card w-50 mx-auto ">
                <div className="card-body">
                    <h5 className="card-title text-center">{this.state.people.name}</h5>
                    <hr className="w-75 pplHr" style={{backgroundColor:'#024F6D'}}/>
                    <p className="card-text person-text"><b>Age: </b>{this.state.people.age}</p>
                    <p className="card-text person-text"><b>Gender: </b>{this.state.people.gender}</p>
                    <p className="card-text person-text"><b>Eye color: </b>{this.state.people.eye_color}</p>
                    <p className="card-text person-text"><b>Hair color: </b>{this.state.people.hair_color}</p>
                </div>
            </div>
            </Fragment>
        );
    }

}

export default PersonWiki;