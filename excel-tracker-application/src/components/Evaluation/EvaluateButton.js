import React, { Component } from 'react'; 

import Colors from '../../assets/text/Colors';  

import Button from '@material-ui/core/Button';  

import {  
  createMuiTheme,   
  ThemeProvider } from '@material-ui/core/styles';  

/** 
 * Basic Button outline 
 * Pass in a label and onClick to render properly 
 */ 
class EvaluateButton extends Component { 


  render() {  
    return (  
      <ThemeProvider theme={theme}> 
        <Button style = {{height: '50%', maxWidth: '15%', margin: '1.5vh 8vw 1vh 0.1vw'}} size='medium' color='secondary' variant='contained' onClick={ () => this.props.onClick(this.props.competencyId) }>  
          Evaluate  
        </Button> 
      </ThemeProvider>  

  );  
  } 
} 

const theme = createMuiTheme({  
  palette: {  
    primary: {  
      main: Colors.white, 
    },  
    secondary: {  
      main: Colors.blue 
    }   
  } 
})  

export default EvaluateButton;