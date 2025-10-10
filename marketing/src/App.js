'use strict'
import React from 'react'
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const productionClassname = createGenerateClassName({
    productionPrefix: 'marketing-'
})
export default ({history}) => {
    return (<div>
        <StylesProvider generateClassName={productionClassname}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/pricing" component={Pricing}/>
                </Switch>
            </Router>
        </StylesProvider>
    </div>)
}