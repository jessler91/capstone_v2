import { connect } from 'react-redux'
import Products from '../components/Products'
import { removeProduct } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        // addSKU: (products) => dispatch(addSKU(products),
        // removeProduct: (index) => dispatch(removeProduct(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
