import { combineReducers } from 'redux'


const users = (state = [], action) => {
    switch(action.type) {
        case 'LOGIN':
            // document.cookie = "loggedIn=true;max-age=60*1000"
            // window.location.replace("/listings")
            // console.log(cookies)
            // return user
            console.log('loggedin')

            // handleTextChange = (e) => {
            //   const state = { ...this.state }
            //   state[e.target.name] = e.target.value
            //   this.setState(state)
            // }

        case 'LOGOUT':
            // 
            // 
            // 

            return user
        default:
            return state
    }
}

const products = (state = [], action) => {
    switch(action.type) {
        // case 'ADD_PRODUCT':
        //     let SKU = products.sku
        //     let city = products.city
        //     let state = products.state
        //     return [ ...products, action.value ]

        default:
            return state
    }
}




export default combineReducers({ users, products })