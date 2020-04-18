import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import ReviewIcon from '@material-ui/icons/RateReview'



/**
 * Stylized evaluation button icon. Uses the passed in function prop
 * to determine functionality
 * 
 * (April 2020)
 */
class ListEvaluationButton extends React.Component {

  handleClick = () => {
    if (this.props.handleClick) {
      this.props.handleClick()
    }
  }


  render() {
    return (
      <div classname="cardStyle" style={{ height: '50%', maxWidth: '5%', margin: '0.8vh 1vw 1vh 0.1vw' }}>
        <IconButton onClick={this.handleClick}>
          <ReviewIcon />
        </IconButton>
      </div>
    );
  }

}

export default (ListEvaluationButton);