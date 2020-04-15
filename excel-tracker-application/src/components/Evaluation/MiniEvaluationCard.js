import React, {Component} from 'react';
import './../../styles/MiniEvaluationCard.css';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class MiniEvaluationCard extends Component {
    constructor(props) {
        super(props);

        var today = new Date(),
        date =  (today.getMonth() + 1) + '-' + today.getDate()  + '-' + today.getFullYear();

        this.state = {
            selectedOption: "4",
            comments: "",
            date:date
        };
    }


    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleChangeText(value) {
        this.setState({comments: value})
        console.log(this.state.comments)
      };

    handleChangeDate(value) {
        console.log(value)
        this.setState({date: value})
    
      };


    render () {
        return (
            <form onSubmit={e => { e.preventDefault(); }}>
            	<div class = "container-mini">
	            	<div><b>{this.props.studentName}</b> - Evaluation</div>
	                <div class="grid-mini">
	                    <div id="performanceColumn" class="sub-grid-mini">
	                        <div class="header"><strong>Evaluation Score</strong></div>
	                        <div>
	                            <input
	                                type="radio"
	                                name="eval"
	                                value="4"
	                                checked={this.state.selectedOption === "4"}
	                                onChange={this.handleOptionChange}
	                                />
	                                4 
	                            
	                            <input
	                                type="radio"
	                                name="eval"
	                                value="3"
	                                checked={this.state.selectedOption === "3"}
	                                onChange={this.handleOptionChange}
	                                />
	                                3 
	                           
	                            <input
	                                type="radio"
	                                name="eval"
	                                value="2"
	                                checked={this.state.selectedOption === "2"}
	                                onChange={this.handleOptionChange}
	                                />
	                                2 
	                           
	                            <input
	                                type="radio"
	                                name="eval"
	                                value="1"
	                                checked={this.state.selectedOption === "1"}
	                                onChange={this.handleOptionChange}
	                                />
	                                1 
	                            
	                            <input
	                                type="radio"
	                                name="eval"
	                                value="0"
	                                checked={this.state.selectedOption === "0"}
	                                onChange={this.handleOptionChange}
	                                />
	                                0 
	                    	</div>
	                           
	                    </div>
	                    <div id="performanceColumn" class="sub-grid-mini">
		                    <div class="header"><strong>General Comments</strong></div>
		                    <div>
		                        <Input
		                            type = "text"
		                            placeholder="Enter comments"
		                            onChange={event => this.handleChangeText(event.target.value) } 
		                        />
		                	</div>
	                	</div>
						
						<div id="performanceColumn" class="sub-grid-mini">
	                        <div class="header"><strong>Date of Entry</strong></div>
	                        <div>
	                        <TextField
	                            id="date"
	                            type="date"
	                            defaultValue= {this.state.date}
	                            onChange={event => this.handleChangeDate(event.target.value) } 
	                        />
	                        </div>
	                    </div>
	                        
	                </div>

	                <div>
	                        <Button variant='contained' onClick={this.onClick} color='secondary'>Submit</Button>
	                </div>
              	</div>

            </form>
        );
    }
}

export default MiniEvaluationCard;