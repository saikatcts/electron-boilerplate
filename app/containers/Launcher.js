import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Launcher from '../components/Launcher';
import userActions from '../actions/user';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onLogin: user.login
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launcher);
