import React from 'react';
import Header from './components/header/Header';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import About from './components/about/About'
import Generator from './components/generator/Generator';

const App = () => {
    const title = '#WHG';

    return (
        <Router>

            <div className="dc-page">
                <Header title={title} />

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Generator />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;