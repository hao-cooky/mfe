'use strict'
import React, {useRef, useEffect} from 'react'
import {mount} from 'marketingModule/Marketing'
import {useHistory} from 'react-router-dom'
import {createBrowserHistory} from 'history'

export default () => {
    const ref = useRef(null);
    const history = useHistory()
    const pushToPath = ({pathname: nextPath}) => {
        const {pathname} = history.location
        if (pathname !== nextPath) {
            history.push(nextPath)
        }
    }

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            onNavigate: pushToPath,
            defaultHistory: createBrowserHistory()
        })

        if (onParentNavigate) {
            history.listen(onParentNavigate)
        }

    }, [])
    return (<div ref={ref}></div>)
}