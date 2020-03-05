import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete'




class DeleteButton extends React.Component {

    constructor(props) {
      super(props);
    }

    handleClick = () => {
        
    }
    
    render() {
        return (
        <div classname = "cardStyle" style = {{height: '50%', maxWidth: '5%', margin: '0.8vh 1vw 1vh 0.1vw'}}>
        <IconButton onClick={this.handleClick} aria-label="delete">
            <DeleteIcon />
        </IconButton>
        </div>
        );
    }

}

export default (DeleteButton);