import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import competencies from './../assets/images/competencies.png'
import reports from './../assets/images/reports.png'
import users from './../assets/images/users.png'
import courses from './../assets/images/courses.png'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Competencies"
          height="150"
          image={competencies}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Competencies
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            View all existing competencies.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="black">
          View
        </Button>
      </CardActions>
    </Card>

    <br></br>

  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Competencies"
        height="150"
        image={users}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Users
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          View all existing users.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="black">
        View
      </Button>
    </CardActions>
  </Card>
  <br></br>
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Competencies"
        height="150"
        image={courses}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Courses
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          View all existing courses.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="black">
        View
      </Button>
    </CardActions>
  </Card>
  <br></br>
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Competencies"
        height="150"
        image={reports}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Reports
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          View all existing reports.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="black">
        View
      </Button>
    </CardActions>
  </Card>
  </div>
  );
}