import React, {Component} from 'react';
import './../../styles/EvaluationForm.css';
import Button from '@material-ui/core/Button';


class EvaluationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "4"
        };
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    render () {
        return (
            <form>
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
                    <div>
                        <Button variant='contained' onClick={this.onClick} color='secondary'>Submit</Button>
                    </div>
                </div>
            </form>
        );
    }
}

export default EvaluationForm;