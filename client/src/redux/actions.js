export const login = (user) => {
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

export const deleteSKU = (index) => {
    return {
        type: 'DELETE_SKU',
        value: index
    }
}

