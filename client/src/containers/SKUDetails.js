import { connect } from 'react-redux'
import SkuDetails from '../components/SkuDetails'

const mapStateToProps = (state) => {
    return {
        users: state.users,
        products: state.products,
        display: state.display,
        inventory: state.inventory,
        sales: state.sales,
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkuDetails)
