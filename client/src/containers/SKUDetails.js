import { connect } from 'react-redux'
import SKUDetails from '../components/SKUDetails'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        products: state.products
    }
}

export default connect(mapStateToProps)(SKUDetails)