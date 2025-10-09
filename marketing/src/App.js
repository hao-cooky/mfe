'use strict'
import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import Landing from './components/Landing';
import Pricing from './components/Pricing';
const  productionClassname = createGenerateClassName({
    productionPrefix: 'marketing-'
})
export default () => {
    return (<div>
        <StylesProvider generateClassName={ productionClassname}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/pricing" component={Pricing}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>)
}