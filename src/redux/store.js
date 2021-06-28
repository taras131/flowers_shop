import React from "react"
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import flowersReducer from "./flowersReducer";

const reducersList = combineReducers ({
    flowers: flowersReducer
})
const store = createStore(reducersList, applyMiddleware(thunk))
export default store