import { combineReducers } from 'redux';


const user = (state = [], action) => {
    switch(action.type) {

        case 'LOGIN':
            document.cookie = "loggedIn=true;max-age=60*1000000"
            window.location.replace("/dashboard")
            return user

        case 'LOGOUT':
            document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            window.location.replace("/login")
            return user
            
        default:
            return state
    }
}

const products = (state = [], action) => {
    switch(action.type) {
        case 'PRODUCTS_LOADED':
            const { products } = action
            return {
                ...state, 
                ...products
            }

        case 'PRODUCTS_FAILED':
            return {
                ...state, error: action.err
            }

        case 'ADD_PRODUCT':
            return [ ...state, action.value ];

        case 'REMOVE_PRODUCT':
            // const products = [ ...state ];
            // products.splice(action.value, 1);
            // console.log("remove product clicked")
      return {...state}

        default:
            return state;
    }
}




export default combineReducers({ user, products })