import { connect } from 'react-redux';
import { Profile } from './Profile';
import { fetchProfileData } from './ducks';
import { profileSelector } from '../../common/selectors/profile';

const mapStateToProps = state => ({
  profile: profileSelector(state),
});

const mapDispatchToProps = {
  fetchProfileData,
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
