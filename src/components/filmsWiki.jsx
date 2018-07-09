import React, { Fragment, Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class FilmWiki extends Component {

    constructor(props) {
        super(props);

        this.state = {
            film: []

        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
            .then(res => res.json())
            .then(films => {
                    this.setState({film:films });
                }
            );
    }

    render() {
        return (
            <Fragment>
            <div className="card w-75 mx-auto " style={{}}>
                <div className="card-body px-4">
                    <h4 className="card-title text-center" style={{color: '#024F6D'}}>{this.state.film.title}</h4>
                    <hr className="w-75" style={{backgroundColor:'#024F6D'}}/>
                    <p className="card-text">{this.state.film.description}</p>
                    <p className="card-text"><b>Director: </b>{this.state.film.director}</p>
                    <p className="card-text"><b>Producer: </b>{this.state.film.producer}</p>
                    <p className="card-text"><b>Release date: </b>{this.state.film.release_date}</p>
                    <p className="card-text"><b>Rotten Tomatoes score: </b>{this.state.film.rt_score}</p>

                </div>
            </div>
            </Fragment>
        );
    }

}

export default FilmWiki;