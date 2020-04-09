import React, {Component} from 'react';
import './../../styles/EvaluationForm.css';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class EvaluationForm extends Component {
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
                <div class="grid-container">
                    <div id="performanceColumn" class="sub-grid">
                        <div class="header"><strong>Evaluation Score</strong></div>
                        <div>
                            <label>
                            <input
                                type="radio"
                                name="eval"
                                value="4"
                                checked={this.state.selectedOption === "4"}
                                onChange={this.handleOptionChange}
                                />
                                4 (Does it well/Has it mastered)
                            </label>
                        </div>
                        <div>
                            <label>
                            <input
                                type="radio"
                                name="eval"
                                value="3"
                                checked={this.state.selectedOption === "3"}
                                onChange={this.handleOptionChange}
                                />
                                3 (Can do by self and completes it fairly well)
                            </label>
                        </div>
                        <div>
                            <label>
                            <input
                                type="radio"
                                name="eval"
                                value="2"
                                checked={this.state.selectedOption === "2"}
                                onChange={this.handleOptionChange}
                                />
                                2 (Can do, but not well - Demonstrating progress)
                            </label>
                        </div>
                        <div>
                            <label>
                            <input
                                type="radio"
                                name="eval"
                                value="1"
                                checked={this.state.selectedOption === "1"}
                                onChange={this.handleOptionChange}
                                />
                                1 (Unable to do/Cannot do)
                            </label>
                        </div>
                        <div>
                            <label>
                            <input
                                type="radio"
                                name="eval"
                                value="0"
                                checked={this.state.selectedOption === "0"}
                                onChange={this.handleOptionChange}
                                />
                                0 (Unwilling - can do but chooses not to do (If checked, then an explanation is required))
                            </label>
                        </div>
                    </div>
                    <div id="descriptionHolder" class="sub-grid">
                        <div class="header"><strong>Evaluation Description</strong></div>
                        <div>{this.props.eval4}</div>
                        <div>{this.props.eval3}</div>
                        <div>{this.props.eval2}</div>
                        <div>{this.props.eval1}</div>
                        <div>{this.props.eval0}</div>
                    </div>
                    
                    <div class="header"><strong>General Comments</strong></div>
                        <div>
                        <Input
                            type = "text"
                            placeholder="Enter comments"
                            onChange={event => this.handleChangeText(event.target.value) } 
                        />
                        </div>

                        <div class="header"><strong>Date of Entry</strong></div>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue= {this.state.date}
                            onChange={event => this.handleChangeDate(event.target.value) } 
                        />
                        
                </div>

                <div>
                        <Button variant='contained' onClick={this.onClick} color='secondary'>Submit</Button>
                </div>
              

            </form>
        );
    }
}

export default EvaluationForm;