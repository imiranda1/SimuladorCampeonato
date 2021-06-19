import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Hello from './views/index';
//import Register from './pages/Register';
//import Profile from './pages/Profile';
//import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Hello} />
            </Switch>
        </BrowserRouter>
    );
}