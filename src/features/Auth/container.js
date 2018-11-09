import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Auth } from './Auth';
import { logInSuccess } from './ducks';

const mapDispatchToProps = {
  logInSuccess,
  push,
};

export const AuthContainer = connect(
  null,
  mapDispatchToProps
)(Auth);
