import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete'



/**
 * Stylized delete button icon. Uses the passed in function prop
 * to determine functionality
 * 
 * (March 2020)
 */
class DeleteButton extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.handleClick) {
      this.props.handleClick()
    }
  }


  render() {
    return (
      <div classname="cardStyle" style={{ height: '50%', maxWidth: '5%', margin: '0.8vh 1vw 1vh 0.1vw' }}>
        <IconButton onClick={this.handleClick}>
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }

}

export default (DeleteButton);