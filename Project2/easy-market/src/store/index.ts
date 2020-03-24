import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

// 引入子reducer
import home from './reducers/home'
let reducers = combineReducers({
    home
})

let store = createStore(reducers, applyMiddleware(ReduxLogger, ReduxThunk))

export default store;