import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardColumns from 'react-bootstrap/Card';

import competencies from './../../assets/images/competencies.png'
import reports from './../../assets/images/reports.png'
import users from './../../assets/images/users.png'
import courses from './../../assets/images/courses.png'
import {Container, Row, Col } from 'react-bootstrap'

const useStyles = makeStyles({
  card: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>

    <Container fixed style = {{ alignItems: 'center', display: 'grid', 'grid-template-columns': '300px 300px', 'justify-content':'center', 'grid-gap': '10px'}}>
    <Card className={classes.card}>
      <CardActionArea style = {{height: '80%'}}>
        <CardMedia
          component="img"
          alt="Competencies"
          height= "100%"
          image={competencies}
          title="Competencies"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Competencies
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="black">
          View
        </Button>
      </CardActions>
    </Card>

  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Users"
        height="100%"
        image={users}
        title="Users"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Users
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="black">
        View
      </Button>
    </CardActions>
  </Card>

  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Courses"
        height="100%"
        image={courses}
        title="Courses"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Courses
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="black">
        View
      </Button>
    </CardActions>
  </Card>

  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Reports"
        height="100%"
        image={reports}
        title="Reports"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Reports
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="black">
        View
      </Button>
    </CardActions>
  </Card>

  </Container>

  </div>
  );
}