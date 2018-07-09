import React, {Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import PersonList from "./personList";
import FilmList from './films';
import Header from './header';
import FilmWiki from './filmsWiki';
import PersonWiki from './personWiki';
import "../index.css";
import "../logo.png";


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/films" component={FilmList} />
                        <Route path="/films/:id/" component={FilmWiki} />
                        <Route exact path="/people" component={PersonList} />
                        <Route path="/people/:id/" component={PersonWiki} />

                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App
