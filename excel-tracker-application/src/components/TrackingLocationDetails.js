import React, { Component } from 'react';
import './../styles/TrackingLocationDetails.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Colors from '../assets/text/Colors.js';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Home/Header.js';
import dummyData from './../services/DummyData.js';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompetencyCard from './Competencies/CompetencyCard';
import TLCard from './TrackingLocations/TLCard';
import UserServices from '../services/UserServices';
import UserCard from './UserView/UserCard';
import AddButton from './Common/AddButton';

import {
  withRouter
} from 'react-router-dom'

import ACTIONS from '../redux/action'
import { connect } from 'react-redux';


class TrackingLocationDetails extends Component {

	competencies = UserServices.getCompetencies().filter(competency => {
		return (competency);
	  }).sort(function(a, b){
		  if (a.domain > b.domain) {
			return 1;
		  }
		  return -1;
	
	  })
	 
	
	  trackingLocations = UserServices.getTrackingLocations().filter(tl => {
		return (tl);
	  })

	  tl = UserServices.getTrackingLocation(this.props.location.state.id).filter(tl => {
		  return (tl);
	  })

	instructors = UserServices.getInstructor(this.tl[0].instructors)
	competencies = UserServices.tlToCompetency(this.tl[0].competencies)
	students = UserServices.getInstructor(this.tl[0].students)
	  
	  assign = event => {
		alert(event.target.text);
	  };
	
	
	  render() {
	
		return (
		  <div>
			<Header handleLogout={() => this.handleLogout} pageName="Tracking Location Details"/>
			<div className="TL">
			  <div className="TLDetails">
				<div className="container">
					<div className="left">
						<div className ="TL-header" style={{color:Colors.blue}}>
						{this.props.location.state.name}
						{console.log(this.competencies)}
						{console.log(this.tl[0].competencies)}
						
						
						</div>
					</div>
				  <div className="right">
				  <div className="side-by-side-header">
				  	<h2 style={{color:Colors.blue}}>Instructors</h2>
					<AddButton>button</AddButton>
				  </div>
					{
						this.instructors.map((user, i) => {
							return(
								<UserCard 
									name={this.instructors[i].name} 
									userType={this.instructors[i].role}
									email={this.instructors[i].email}
									prop = {this.props}
								/>
							); 
						})
					}
				 </div>
				</div>
				<div className="container">
				<div className="left"> 
					<div className="side-by-side-header">
						<h2 style={{color:Colors.blue}}>Competencies</h2>
						<AddButton>button</AddButton>
					</div>
					{
					this.competencies.map((competency, i) => {
						return(

							
							<CompetencyCard 
								title={this.competencies[i].title} 
								domain={this.competencies[i].domain}
								subcategory={this.competencies[i].subcategory} 
								prop = {this.props}
							/>
						); 
					})
					}
				</div>	
				<div className="right">
					<div className="side-by-side-header">
						<h2 style={{color:Colors.blue}}>Students</h2>
						<AddButton>button</AddButton>
					</div>
				{
						this.students.map((user, i) => {
							return(
								<UserCard 
									name={this.students[i].name} 
									userType={this.students[i].role}
									email={this.students[i].email}
									prop = {this.props}
								/>
							); 
						})
					}	
			  </div>
			</div>
			</div>
		  </div>
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