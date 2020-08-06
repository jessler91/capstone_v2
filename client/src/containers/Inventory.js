import { connect } from 'react-redux'
import Inventory from '../components/Inventory'

const mapStateToProps = (state) => {
    return {
        products: state.products,
        inventory: state.inventory,
        display: state.display,
    }
}

export default connect(mapStateToProps)(Inventory)