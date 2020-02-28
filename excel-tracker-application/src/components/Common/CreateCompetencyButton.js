import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';


import UserServices from '../../services/UserServices';
import CompetencyServices from '../../services/CompetencyServices';

const useStyles = makeStyles(theme => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 600,
    fullWidth: true
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    fullWidth: true
  },
}));


class CreateCompetencyButton extends React.Component {

  componentDidMount() {
    let competencyLevels = CompetencyServices.getCompetencyLevels();
    let competencyFrequencies = CompetencyServices.getEvaluationFrequencies();
    let competencyDomains = CompetencyServices.getCompetencyDomains();

    this.setState({
      levels: competencyLevels,
      frequencies: competencyFrequencies,
      domains: competencyDomains
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      level: '',
      description: '',
      frequency: '',
      title: '',
      domain: '',
      subcategory: '',
      details: '',

      zeroScale: '',
      oneScale: '',
      twoScale: '',
      threeScale: '',
      fourScale: '',
      NScale: '',

      subcategories: [],
      levels: [],
      frequencies: [],
      domains: [],
      open: false,
      
      
    }

  }

  setLevel(newLevel) {
    this.setState({
      level: newLevel
    })
  }

  setTitle(newTitle) {
    this.setState({
      title: newTitle
    })
  }

  setFrequency(newFrequency) {
    this.setState({
      frequency: newFrequency
    })
  }

  setDetails(details) {
    this.setState({
      details: details
    })
  }


  setOpen(newOpen) {
    this.setState({
      open: newOpen
    })
  }

  setDescription(newDescription) {
    this.setState({
      description: newDescription
    })
  }

  setDomain(newDomain) {
    this.setState({
      domain: newDomain
    })
  }

  setSubCategories(subcategories) {
    this.setState({
      subcategories: subcategories
    })
  }

  setSubCategory(subcategory) {
    this.setState({
      subcategory: subcategory
    })
  }

  setZeroScale(zeroScale) {
    this.setState({
      zeroScale: zeroScale
    })
  }

  setOneScale(oneScale) {
    this.setState({
      oneScale: oneScale
    })
  }

  setTwoScale(twoScale) {
    this.setState({
      twoScale: twoScale
    })
  }

  setThreeScale(threeScale) {
    this.setState({
      threeScale: threeScale
    })
  }

  setFourScale(fourScale) {
    this.setState({
      fourScale: fourScale
    })
  }

  setNScale(nScale) {
    this.setState({
      nScale: nScale
    })
  }

  handleChangeZeroScale = event => {
    this.setZeroScale(event.target.value || '')
  }

  handleChangeOneScale = event => {
    this.setOneScale(event.target.value || '')
  }

  handleChangeTwoScale = event => {
    this.setTwoScale(event.target.value || '')
  }

  handleChangeThreeScale = event => {
    this.setThreeScale(event.target.value || '')
  }

  handleChangeFourScale = event => {
    this.setFourScale(event.target.value || '')
  }

  handleChangeNScale = event => {
    this.setNScale(event.target.value || '')
  }

  

  handleChangeLevel = event => {
    this.setLevel(event.target.value || '');
  };

  handleChangeDescription = event => {
    this.setDescription(event.target.value || '');
  };

  handleChangeFrequency = event => {
    this.setFrequency(event.target.value || '');
  }

  handleChangeDomain = event => {
    let subcategories = CompetencyServices.getCompetencySubCategories(event.target.value);
    this.setDomain(event.target.value || '');
    this.setSubCategories(subcategories);
    this.setSubCategory('');
  }

  handleChangeSubcategory = event => {
    this.setSubCategory(event.target.value || '')
  }

  handleChangeTitle = event => {
    this.setTitle(event.target.value || '');
  }

  handleChangeDetails = event => {
    this.setDetails(event.target.value || '');
  }

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setOpen(false);
  };

  handleSubmit = () => {
    UserServices.assignMentor(this.state.type, this.props.studentEmail)
    this.setOpen(false)
  }

  rendorLevelList() {
    const listItems = this.state.levels.map((item) => <option value={item}>{item}</option>)
    return listItems
  }

  rendorFrequencyList() {
    const frequencies = this.state.frequencies.map((item) => <option value={item}>{item}</option>)
    return frequencies
  }

  rendorDomainList() {
    const domains = this.state.domains.map((item) => <option value={item}>{item}</option>)
    return domains
  }

  rendorFrequencyList() {
    const frequencies = this.state.frequencies.map((item) => <option value={item}>{item}</option>)
    return frequencies
  }

  rendorSubcategoryList() {
    const subcategories = this.state.subcategories.map((item) => <option value={item}>{item}</option>)
    return subcategories
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color='secondary'>Create Competency</Button>
        <Dialog maxWidth='lg' fullHeight={true} fullWidth={true} disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Fill in the form to create the competency</DialogTitle>
          <DialogContent>
            <form className={this.props.classes.container}>
              <FormControl className={this.props.classes.formControl}>
                <Select
                  label="Level"
                  native
                  value={this.state.level}
                  onChange={this.handleChangeLevel}
                  input={<Input id="demo-dialog-native" />}
                >
                  {this.rendorLevelList()}
                </Select>

                <Select
                  label="Evaluation Frequency"
                  native
                  value={this.state.frequency}
                  onChange={this.handleChangeFrequency}
                  input={<Input id="demo-dialog-native" />}
                >
                  {this.rendorFrequencyList()}
                </Select>

                <Select
                  label="Domain"
                  native
                  value={this.state.domain}
                  onChange={this.handleChangeDomain}
                  input={<Input id="demo-dialog-native" />}
                >
                  {this.rendorDomainList()}
                </Select>

                <Select
                  label="Subcategory"
                  native
                  value={this.state.subcategory}
                  onChange={this.handleChangeSubcategory}
                  input={<Input id="demo-dialog-native" />}
                >
                  {this.rendorSubcategoryList()}
                </Select>

                <TextField
                  id="standard-multiline-static"
                  label="Description"
                  rows="4"
                  varient="filled"
                  multiline
                  size='medium'
                  margin="2"
         
                  value={this.state.description}
                  onChange={this.handleChangeDescription}
                />

                <TextField
                  id="standard-multiline-static"
                  label="Details Required"
                  rows="4"
                  varient="filled"
                  multiline
                  size='medium'
                  margin="2"
         
                  value={this.state.details}
                  onChange={this.handleChangeDetails}
                />

                <TextField
                  id="standard-basic"
                  label="Title"
                  varient="filled"
                  size='medium'
                  margin="2"
      
                  value={this.state.title}
                  onChange={this.handleChangeTitle}
                />

                <TextField
                  id="standard-basic"
                  label="Zero Scale"
                  varient="filled"
                  size='medium'
                  margin="2"
      
                  value={this.state.zeroScale}
                  onChange={this.handleChangeZeroScale}
                />

                <TextField
                  id="standard-basic"
                  label="Two Scale"
                  varient="filled"
                  size='medium'
                  margin="2"
      
                  value={this.state.twoScale}
                  onChange={this.handleChangeTwoScale}
                />
                <TextField
                  id="standard-basic"
                  label="Three Scale"
                  varient="filled"
                  size='medium'
                  margin="2"
      
                  value={this.state.threeScale}
                  onChange={this.handleChangeThreeScale}
                />
                <TextField
                  id="standard-basic"
                  label="Four Scale"
                  varient="filled"
                  size='medium'
                  margin="2"
      
                  value={this.state.fourScale}
                  onChange={this.handleChangeFourScale}
                />
                <TextField
                  id="standard-basic"
                  label="N Scale"
                  varient="filled"
                  size='medium'
                  margin="2"
      
                  value={this.state.nScale}
                  onChange={this.handleChangeNScale}
                />


              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="secondary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
}

export default withStyles(useStyles)(CreateCompetencyButton);