import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

function ImgMediaCard(props) {

  return (
    <div>

    <Card>
      <CardActionArea style = {{height: '80%'}}>
        <CardMedia
          component="img"
          alt={props.pageName}
          height= "100%"
          image={props.image}
          title={props.pageName}
          onClick={props.onClick}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.pageName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  );
}

export default (withRouter(ImgMediaCard));