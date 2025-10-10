'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";
import {createMemoryHistory, createBrowserHistory} from 'history';

const mount = (element, {onNavigate, defaultHistory}) => {
    const history = defaultHistory || createMemoryHistory();
    if (onNavigate) {
        history.listen(onNavigate)
    }

    const handleParentNavigate = ({pathname: nextPath}) => {
        const {pathname} = history.location
        if (pathname !== nextPath) {
            history.push(nextPath)
        }
    }
    ReactDOM.render(<App history={history}/>, element)

    return {
        onParentNavigate: handleParentNavigate
    }
}


if (process.env.NODE_ENV === 'development') {
    const rootElement = document.getElementById('_marketing-dev-root');
    if (rootElement) {
        mount(rootElement, {
            defaultHistory: createBrowserHistory()
        })
    }
}

export {mount}