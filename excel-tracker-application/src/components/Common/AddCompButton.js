import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import AddBtn from './../../assets/images/Add.png';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
   
    
  }));

class AddComp extends React.Component {

    constructor(props) {
      super(props);
    }

    handleClick = () => {
        
    }
    
    render() {
        return (
        <div classname = "cardStyle" style = {{height: '10%', maxWidth: '20%'}}>
        <Button size = 'small'>
            <img  src={AddBtn} width="10%" height="10%"/>
         </Button>
        </div>
        );
    }

}

export default withStyles(useStyles)(AddComp);