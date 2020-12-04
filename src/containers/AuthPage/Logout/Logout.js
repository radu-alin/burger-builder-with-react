import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogout } from '../../../redux/actions/index';

const Logout = ({ onLogout }) => {
  useEffect(() => onLogout());
  return <Redirect to="/" />;
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authLogout()),
});
export default connect(null, mapDispatchToProps)(Logout);
