import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { deleteSKU, addSKU } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        users: state.users,
        products: state.products
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        addSKU: (products) => dispatch(addSKU(products),
        // deleteSKU: (index) => dispatch(deleteSKU(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
