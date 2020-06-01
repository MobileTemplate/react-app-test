import React from 'react';
import {
    HashRouter,
    Route,
} from 'react-router-dom';

import {
    Message,
    Users
} from '../page'

const Routes = () => (
    <HashRouter>
        <div style={{ height: '100%', width: '100%' }}>
            <Route exact path="/" component={Message} />
            <Route exact path="/users" component={Users} />
        </div>
    </HashRouter>
)

export default Routes;