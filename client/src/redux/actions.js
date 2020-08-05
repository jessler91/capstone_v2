export const setUser = (user) => {
    return {
        type: 'LOGIN',
        value: user
    }
}

export const logout = (user) => {
    return {
        type: 'LOGOUT',
        value: user
    }
}

export const addSKU = (product) => {
    return {
        type: 'ADD_SKU',
        value: product
    }
}

export const removeProduct = (index) => {
    return {
        type: 'DELETE_SKU',
        value: index
    }
}



export function getProducts() {
    return function (dispatch) {
        fetch("http://localhost:5000/products/")
        .then( response => {
            return response.json();
        }).then(products => {
            dispatch(productsLoaded(products));
        })
        .catch(err => {
            console.log(err)
            dispatch(productsFailed(err));
        });
    };
}
    
function productsLoaded(products) {
    return {
        type: 'PRODUCTS_LOADED',
         products
    };
}

function productsFailed(err) {
    return {
        type: 'PRODUCTS_FAILED',
        error: err
    };
}