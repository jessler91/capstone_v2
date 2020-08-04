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

