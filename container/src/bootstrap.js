'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";


const mount = (element) => {
    ReactDOM.render(<App/>, element)
}
console.log("mounting container")
mount(document.getElementById('root'))