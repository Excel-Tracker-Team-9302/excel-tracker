import React, { Component } from 'react';


import {
  withRouter
} from 'react-router-dom'

import ACTIONS from '../redux/action'
import { connect } from 'react-redux';


class TrackingLocationDetails extends Component {

	render() {

	    return (

	    	<div>
	    	{this.props.location.state.name}
	    	</div>


	    );
	}
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser : (currentUser) => dispatch(ACTIONS.setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrackingLocationDetails));