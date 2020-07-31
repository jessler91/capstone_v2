import { combineReducers } from 'redux'


const user = (state = [], action) => {
    switch(action.type) {

        case 'LOGIN':
            document.cookie = "loggedIn=true;max-age=60*10000"
            window.location.replace("/dashboard")
            return user

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

        case 'ADD_PRODUCT':
            return [ ...state, action.value ];

        case 'REMOVE_PRODUCT':
            const products = [ ...state ];
            products.splice(action.value, 1);
      return products;

        default:
            return state;
    }
}




export default combineReducers({ user, products })