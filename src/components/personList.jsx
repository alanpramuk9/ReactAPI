import React, {Fragment, Component} from 'react';
import 'isomorphic-fetch';
import Person from './person';
import 'es6-promises';

class PersonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            // clicked: false
        }
    }
    // handleClick = () => {
    //     this.setState({clicked : !this.state.clicked});
    // }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(results => results.json())
            .then((people) => this.setState({people}));
    }

    render() {
        return (
            <Fragment>
            <div className="container maxWidth">
                <div className="row">
                    {this.state.people.map((person, index) => {
                        return (
                            <Person key={person.id} person={person}/>

                        );
                    })}
                </div>
            </div>
            </Fragment>
        );

         }
    }
export default PersonList

// <React.Fragment>
// <div className="container-fluid justify-content-center">
//     <div className="row">
//     {this.state.people.map((person, index) => {
//         return (
//             <div>
//                 /*<Person key={person.id} person={person} />*/
//                 <div key={index} className="col-lg-4">
//                     <Person name={person.name} age={person.age} gender={person.gender} url={person.url} id={person.id} />
//                 </div>
//                 );
//                 })}
//             </div>
//             </div>
//     </React.Fragment>