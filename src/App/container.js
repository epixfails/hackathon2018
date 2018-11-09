import { connect } from 'react-redux';
import { App } from './App';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
});

export const AppContainer = connect(mapStateToProps)(App);
