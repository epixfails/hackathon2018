import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Auth } from './Auth';

const mapDispatchToProps = {
  push,
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
