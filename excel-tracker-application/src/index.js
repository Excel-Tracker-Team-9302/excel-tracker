import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { 
  createMuiTheme, 
  ThemeProvider } from '@material-ui/core/styles';
import Colors from './assets/text/Colors';

const store = configureStore();

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

ReactDOM.render(
  <Provider store = {store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>
  , 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
