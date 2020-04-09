import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DeleteImage from './../../assets/images/Delete.png'

import Select from '@material-ui/core/Select';
import CompetencyServices from '../../services/CompetencyServices';
import Grid from '@material-ui/core/Grid';
import { FormLabel } from '@material-ui/core';
import EditBtn from './../../assets/images/Edit.png';
import ComptencyServices from '../../services/CompetencyServices';

/**
 * Pop-up button used to create a program competency
 * or edit a pre-existing competency. If a prop
 * competency id is passed in, the popup will
 * prefill with that competencies data. Otherwise,
 * a new one will be created.
 * 
 * Dialog created using the Material UI Dialog
 * demos here: https://material-ui.com/components/dialogs/
 * (Febuary 2020)
 */
class CreateCompetencyButton extends React.Component {

  componentDidMount() {
    let competencyLevels = CompetencyServices.getCompetencyLevels();
    let competencyFrequencies = CompetencyServices.getEvaluationFrequencies();
    let competencyDomains = CompetencyServices.getCompetencyDomains();

    if (this.props.id) {
      let competency = ComptencyServices.getCompetencyById(this.props.id)
      let competencySubcategories = CompetencyServices.getCompetencySubCategories(competency.domain)
      this.setState({
        level: competency.difficulty,
        description: competency.description,
        frequency: competency.frequency,
        title: competency.title,
        domain: competency.domain,
        subcategory: competency.subcategory,
        details: competency.details,
        zeroScale: competency.zeroScale,
        oneScale: competency.oneScale,
        twoScale: competency.twoScale,
        threeScale: competency.threeScale,
        fourScale: competency.fourScale,
        NScale: competency.NScale,

        levels: competencyLevels,
        frequencies: competencyFrequencies,
        domains: competencyDomains,
        subcategories: competencySubcategories
      })

    } else {
      let competencySubcategories = CompetencyServices.getCompetencySubCategories(this.state.domain)
      this.setState({
        levels: competencyLevels,
        frequencies: competencyFrequencies,
        domains: competencyDomains,
        subcategories: competencySubcategories
      })
    }
  }


  constructor(props) {
    super(props);

    this.state = {
      level: '',
      description: '',
      frequency: '',
      title: '',
      domain: 'Transportation',
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
    this.setZeroScale(event.target.value)
  }

  handleChangeOneScale = event => {
    this.setOneScale(event.target.value)
  }

  handleChangeTwoScale = event => {
    this.setTwoScale(event.target.value)
  }

  handleChangeThreeScale = event => {
    this.setThreeScale(event.target.value)
  }

  handleChangeFourScale = event => {
    this.setFourScale(event.target.value)
  }

  handleChangeNScale = event => {
    this.setNScale(event.target.value)
  }

  handleChangeLevel = event => {
    this.setLevel(event.target.value);
  };

  handleChangeDescription = event => {
    this.setDescription(event.target.value);
  };

  handleChangeFrequency = event => {
    this.setFrequency(event.target.value);
  }

  handleChangeDomain = event => {
    let subcategories = CompetencyServices.getCompetencySubCategories(event.target.value);
    this.setDomain(event.target.value);
    this.setSubCategories(subcategories);
  }

  handleChangeSubcategory = event => {
    this.setSubCategory(event.target.value)
  }

  handleChangeTitle = event => {
    this.setTitle(event.target.value);
  }

  handleChangeDetails = event => {
    this.setDetails(event.target.value);
  }

  openWindow = () => {
    this.setState({
      open: true
    });
  };

  closeWindow = () => {
    this.setState({
      open: false
    });
  };

  handleSubmit = () => {
    let competency = {
      level: this.state.level,
      description: this.state.description,
      frequency: this.state.frequency,
      title: this.state.title,
      domain: this.state.domain,
      subcategory: this.state.subcategory,
      details: this.state.details,

      zeroScale: this.state.zeroScale,
      oneScale: this.state.oneScale,
      twoScale: this.state.twoScale,
      threeScale: this.state.threeScale,
      fourScale: this.state.fourScale,
      NScale: this.state.NScale
    }

    if (!(competency.level && competency.description
      && competency.frequency && competency.title && competency.domain
      && competency.subcategory)) {
      alert("Please fill in all required fields (*)")
    } else {
      CompetencyServices.createCompetency(competency)
      this.closeWindow()
    }
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
    if (subcategories == []) {
      return ['Select Domain']
    }
    return subcategories
  }

  renderButton() {
    if (this.props.id || this.props.id == 0) {
      return (<div classname="cardStyle" style={{ height: '50%', maxWidth: '5%', margin: '1.9vh 1vw 1vh 0.1vw' }}>
        <Button onClick={this.openWindow} size='small'>
          <img src={EditBtn} width="22vw" height="50%" />
        </Button>
      </div>)
    } else {
      return (<Button variant='contained' onClick={this.openWindow} color='secondary'>{this.props.buttonTitle}</Button>)
    }
  }

  render() {
    return (
      <div>

        {this.renderButton()}
        <Dialog maxWidth='lg' fullWidth={true} open={this.state.open} onClose={this.closeWindow}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
              <DialogTitle>{this.props.title}</DialogTitle>
            </div>

            <Button onClick={this.closeWindow} size='small'>
              <img src={DeleteImage} width="22vw" height="50%" />
            </Button>
          </div>
          <DialogContent>
            <div style={{ flex: 1 }}>


              <Grid container spacing={4}>

                <Grid xs={12} item>
                  <TextField
                    label="Title"
                    size='medium'
                    fullWidth={true}
                    variant='outlined'
                    required={true}
                    value={this.state.title}
                    onChange={this.handleChangeTitle}
                  />
                </Grid>

                <Grid xs={7} item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <FormLabel>Domain: </FormLabel>
                    </Grid>
                    <Grid item>
                      <Select
                        label="Domain"
                        native
                        value={this.state.domain}
                        onChange={this.handleChangeDomain}
                      >
                        {this.rendorDomainList()}
                      </Select>
                    </Grid>
                    <Grid item>
                      <FormLabel>Subcategory: </FormLabel>
                    </Grid>
                    <Grid item>
                      <Select
                        label="Subcategory"
                        native
                        defaultValue={this.state.subcategory}
                        value={this.state.subcategory}
                        onChange={this.handleChangeSubcategory}

                      >
                        {this.rendorSubcategoryList()}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid xs={5} item>
                  <Grid container spacing={3}>
                    <Grid item>
                      <FormLabel>Level: </FormLabel>
                    </Grid>
                    <Grid item>
                      <Select
                        label="Level"
                        native
                        value={this.state.level}
                        onChange={this.handleChangeLevel}
                      >
                        {this.rendorLevelList()}
                      </Select>
                    </Grid>
                    <Grid item>
                      <FormLabel>Frequency: </FormLabel>
                    </Grid>
                    <Grid item>
                      <Select
                        label="Evaluation Frequency"
                        native
                        value={this.state.frequency}
                        onChange={this.handleChangeFrequency}
                      >
                        {this.rendorFrequencyList()}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="Description"
                    rows="4"
                    variant='outlined'
                    multiline
                    size='medium'
                    margin='normal'
                    fullWidth={true}
                    required={true}

                    value={this.state.description}
                    onChange={this.handleChangeDescription}
                  />
                </Grid>



                <Grid xs={12} item>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <TextField
                        label="Zero Scale"
                        variant="outlined"
                        size='medium'
                        margin='normal'
                        fullWidth={true}
                        multiline={true}
                        rows='1'
                        rowsMax='3'
                        value={this.state.zeroScale}
                        onChange={this.handleChangeZeroScale}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        label="One Scale"
                        variant="outlined"
                        size='medium'
                        margin='normal'
                        fullWidth={true}
                        multiline={true}
                        rows='1'
                        rowsMax='3'
                        value={this.state.oneScale}
                        onChange={this.handleChangeOneScale}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        label="Two Scale"
                        variant="outlined"
                        size='medium'
                        margin='normal'
                        fullWidth={true}
                        multiline={true}
                        rows='1'
                        rowsMax='3'
                        value={this.state.twoScale}
                        onChange={this.handleChangeTwoScale}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid xs={12} item>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <TextField
                        label="Three Scale"
                        variant="outlined"
                        size='medium'
                        margin='normal'
                        fullWidth={true}
                        multiline={true}
                        rows='1'
                        rowsMax='3'
                        value={this.state.threeScale}
                        onChange={this.handleChangeThreeScale}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <TextField
                        label="Four Scale"
                        variant="outlined"
                        size='medium'
                        margin='normal'
                        fullWidth={true}
                        multiline={true}
                        rows='1'
                        rowsMax='3'
                        value={this.state.fourScale}
                        onChange={this.handleChangeFourScale}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        label="N Scale"
                        variant="outlined"
                        size='medium'
                        margin='normal'
                        fullWidth={true}
                        multiline={true}
                        rows='1'
                        rowsMax='3'
                        value={this.state.nScale}
                        onChange={this.handleChangeNScale}
                      />
                    </Grid>

                  </Grid>
                </Grid>

                <Grid xs={12} item>
                  <TextField
                    label="Details Required"
                    rows="4"
                    variant="outlined"
                    multiline={true}
                    size='medium'
                    margin='normal'
                    fullWidth={true}
                    value={this.state.details}
                    onChange={this.handleChangeDetails}
                  />
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={this.handleSubmit} color="secondary">
              {this.props.buttonTitle}
            </Button>
          </DialogActions>
        </Dialog>
      </div >
    );
  }
}

CreateCompetencyButton.defaultProps = {

  buttonTitle: 'Create Competency'
}

export default (CreateCompetencyButton);