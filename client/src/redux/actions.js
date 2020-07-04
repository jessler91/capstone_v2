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

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const deleteSKU = (index) => {
    return {
        type: 'DELETE_SKU',
        value: index
    }
}

