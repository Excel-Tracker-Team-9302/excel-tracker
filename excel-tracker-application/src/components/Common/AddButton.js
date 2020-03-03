import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AddBtn from './../../assets/images/Add.png';


const useStyles = makeStyles(theme => ({
   
    
  }));

class AddButton extends React.Component {

    constructor(props) {
      super(props);
    }

    handleClick = () => {
        
    }
    
    render() {
        return (
        <div classname = "cardStyle" style = {{height: '50%', maxWidth: '5%', margin: '0.8vh 4vw 1vh 0.1vw'}}>
        <Button size = 'small'>
            <img  src={AddBtn} width="22vw" height="50%"/>
         </Button>
        </div>
        );
    }

}

export default withStyles(useStyles)(AddButton);