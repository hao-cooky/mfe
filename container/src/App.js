'use strict'
import React from 'react'
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import {BrowserRouter} from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'

const productionClassname = createGenerateClassName({
    productionPrefix: 'container-'
})
export default () => {
    return (
        <StylesProvider generateClassName={productionClassname}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <MarketingApp/>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}