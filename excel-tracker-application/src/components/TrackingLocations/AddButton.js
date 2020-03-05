import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import AddBtn from './../../assets/images/Add.png';



class AddButton extends React.Component {

    constructor(props) {
      super(props);
    }

    handleClick = (name) => {
        this.props.handleClick()
    }
    
    render() {
        return (
        <div classname = "cardStyle" style = {{height: '50%', maxWidth: '5%', margin: '0.8vh 4vw 1vh 0.1vw'}}>
        <Button onClick={this.handleClick} size = 'small'>
            <img  src={AddBtn} width="22vw" height="50%"/>
         </Button>
        </div>
        );
    }

}

export default (AddButton);