import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import EditBtn from './../../assets/images/Edit.png';



/**
 * Small stylized button. Expects a function
 * to be passed in to determine functionality
 * 
 * (March 2020)
 */
class EditButton extends React.Component {

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
        <div classname = "cardStyle" style = {{height: '50%', maxWidth: '5%', margin: '1.9vh 8vw 1vh 0.1vw'}}>
        <Button onClick={this.handleClick} size = 'small'>
            <img  src={EditBtn} width="22vw" height="50%"/>
         </Button>
        </div>
        );
    }

}

export default (EditButton);