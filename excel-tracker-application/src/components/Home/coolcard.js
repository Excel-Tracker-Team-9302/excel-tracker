import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {
  withRouter
} from "react-router-dom";

/**
 * Image cards displayed on the dashboard of the application
 * 
 * Cards created using the Material UI Card
 * demos here: https://material-ui.com/components/cards/
 * (January 2020)
 */
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