import React from "react"
import {APIFlowers} from "../api/api";

const SET_FLOWERS ="SET_FLOWERS"
const initialState = {
    flowersList: []
}
const flowersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export const setFlowers = (flowersList) => {
    return {type: SET_FLOWERS, flowersList}
}
export const getFlowers = () => async (dispatch) =>{
    console.log("getFlowers")
    let response = await APIFlowers.getFlowers()
    console.log(response)
}
export default flowersReducer