import { connect } from 'react-redux'
import Products from '../components/Products'
import { getProducts } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(getProducts())
        }
        // addSKU: (products) => dispatch(addSKU(products),
        // removeProduct: (index) => dispatch(removeProduct(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
