import { combineReducers } from 'redux'


const user = (state = [], action) => {
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

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            let address = listing.address
            let city = listing.city
            let state = listing.state
            return [ ...state, action.value ]

        default:
            return state
    }
}



const map = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_COORDINATES':
            return [ ...state, action.value ]
        default:
            return state
    }
}

export default combineReducers({ user, listings, map })