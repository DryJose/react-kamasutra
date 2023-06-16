import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile"
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile_reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer  extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 25509;
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }
  
  render() {
    return (
      <Profile { ...this.props} profile={this.props.profile} status={this.props.status}
      updateStatus={this.props.updateStatus }/>
  );
};
}

let mapStateToPtops =(state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
connect(mapStateToPtops, {getUserProfile, getStatus, updateStatus}),
withRouter,
// withAuthRedirect
)(ProfileContainer)
