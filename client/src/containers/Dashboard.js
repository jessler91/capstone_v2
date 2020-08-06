import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeProduct } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        users: state.users,
        products: state.products,
        display: state.display,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        // addSKU: (products) => dispatch(addSKU(products),
        removeProduct: (index) => dispatch(removeProduct(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
