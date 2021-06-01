import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Display from './Screens/Display';
import main from './Screens/main';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={main} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/display" component={Display} />
                </Switch>
            </BrowserRouter>
        );
    }
}

render(<App />, document.getElementById('root'));
