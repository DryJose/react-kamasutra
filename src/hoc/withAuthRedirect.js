import React from "react";

let mapStateToPtopsForRedirect =(state) => ({
    isAuth: state.auth.isAuth
  })

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!props.isAuth) return <Navigate to="/login" />;

      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPtopsForRedirect)(AuthRedirectComponent)
  return ConnectedAuthRedirectComponent
}