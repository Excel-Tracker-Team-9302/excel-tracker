import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DeleteImage from './../../assets/images/Delete.png'
import UserServices from '../../services/UserServices';


/**
 * Button to create a new tracking location. Tracking 
 * locations only require a name. Once created, users can
 * navigate to the tracking location's page to
 * add the tracking locaiton.
 * 
 * Dialog created using the Material UI Dialog
 * demos here: https://material-ui.com/components/dialogs/
 * (Febuary 2020)
 */
class CreateTrackingLocation extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      open: false,
      name: ''
    }
  }

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  openWindow = () => {
    this.setState({
      open: true
    })
  };

  closeWindow = () => {
    this.setState({
      open: false
    })
  };

  handleSubmit = () => {
    if (this.state.name == '') {
      alert('Please enter a name for the tracking location');
    } else {
      UserServices.createTrackingLocation(this.state.name).then((response) => {
        console.log(response)
      });
      this.closeWindow()
    }
  }

  render() {
    return (
      <div>
        <Button variant='contained' onClick={this.openWindow} color='secondary'>Create Tracking Location</Button>
        <Dialog open={this.state.open} onClose={this.closeWindow}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DialogTitle>Create a New Tracking Location</DialogTitle>
            <Button onClick={this.closeWindow} size='small'>
              <img src={DeleteImage} width="22vw" height="50%" />
            </Button>
          </div>

          <DialogContent>
            <TextField onChange={this.handleChangeName} value={this.state.email} label="Name" />
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={this.handleSubmit} color="secondary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}

export default CreateTrackingLocation;