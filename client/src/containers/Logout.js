import { connect } from 'react-redux';
import Logout from '../components/Logout';
import { logout } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);