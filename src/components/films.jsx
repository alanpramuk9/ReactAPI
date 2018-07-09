import React, {Component } from 'react';
import Film from './film';
import 'isomorphic-fetch';
import 'es6-promise';


class FilmList extends Component {
    constructor(props) {
        super(props);

        this.state= {
            films: []
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((results) => {
                return results.json();
            }).then((films) => {
            this.setState({films});
        });
    };

    render() {
        //console.log(this.state.films);
        return (
            <React.Fragment>
                <div className="container maxWidth" >
                    <div className="row">
                        {this.state.films.map((film, index) => {
                            return (
                                <Film key={film.id} film={film}/>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default FilmList