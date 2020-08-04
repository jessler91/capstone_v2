import { connect } from 'react-redux'
import SKUDetails from '../components/SKUDetails'

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(SKUDetails)