import React, { Component } from 'react';
import axios from 'axios';
import '../../reset.css';
import './gardenTaskOrganizer.css';
import ListHolder from '../listHolder/listHolder.js';
import PlantMaker from '../PlantMaker/plantMaker.js';
import GTL from '../GTL/GTL.js';


class GardenTaskOrganizer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedVegtables: [],
      selectedFruits: [],
      selectedFlowers: [],
      selectedHerbs: [],
      selectedPlants:[],
      originalPlantsObj: this.props.originalPlantsObj,
      lastFrostUI: "",
      firstFrostUI: "",
      nameUI:'',
      catagoryUI:'', 
      firstPlantingUI:undefined, 
      howOftenUI:"", 
      daysToMaturityUI:undefined, 
      stopPlantingUI:undefined, 
      notesUI:'',
      view: 1
    }

    this.changeFrostDates=this.changeFrostDates.bind(this);
    this.handleChangeFirstFrostDate=this.handleChangeFirstFrostDate.bind(this);
    this.handleChangeLastFrostDate=this.handleChangeLastFrostDate.bind(this);
    this.handleChangeSelectedVegtables=this.handleChangeSelectedVegtables.bind(this);
    this.handleChangeSelectedFruits=this.handleChangeSelectedFruits.bind(this);
    this.handleChangeSelectedFlowers=this.handleChangeSelectedFlowers.bind(this);
    this.handleChangeSelectedHerbs=this.handleChangeSelectedHerbs.bind(this);
    this.createNewPlant=this.createNewPlant.bind(this);
    this.handleChangesNewPlantCatagory=this.handleChangesNewPlantCatagory.bind(this);
    this.handleChangesNewPlantDTM=this.handleChangesNewPlantDTM.bind(this);
    this.handleChangesNewPlantFirstPlanting=this.handleChangesNewPlantFirstPlanting.bind(this);
    this.handleChangesNewPlantHowOften=this.handleChangesNewPlantHowOften.bind(this);
    this.handleChangesNewPlantName=this.handleChangesNewPlantName.bind(this);
    this.handleChangesNewPlantNotes=this.handleChangesNewPlantNotes.bind(this);
    this.handleChangesNewPlantStopPlanting=this.handleChangesNewPlantStopPlanting.bind(this);
    this.componentWillMount=this.componentWillMount.bind(this);
  }

  //This function grabs all the necisary data to get the first and last frost dates. It must be pulled in this nested 
  //fashion due to the fact that each following api get requires the state to be updated from the previous and thus
  //cannot run asyncronusly. The only exception to this is the vegtable data from our node server. to make the call function 
  //properly the cors node module was needed. (see in the index.js server file.)
  componentWillMount(){
    axios.get('http://localhost:3030/api/GTO').then((response) => {
      this.setState({ 
        originalPlantsObj: response.data,
      });
    });
  }

  handleChangeSelectedVegtables(){
    let arr = [];
    for(let i = 0; i < document.Vegtables_list.length; i++){
      if(document.Vegtables_list[i].checked === true){
        arr.push(document.Vegtables_list.plants[i].value);
      }
    }
    this.setState({selectedVegtables:arr});
    arr = [];
  }

  handleChangeSelectedFruits(){
    let arr = [];
    for(let i = 0; i < document.Fruits_list.length; i++){
      if(document.Fruits_list[i].checked === true){
        arr.push(document.Fruits_list.plants[i].value);
      }
    }
    this.setState({selectedFruits:arr});
    arr = [];
  }

  handleChangeSelectedHerbs(){
    let arr = [];
    for(let i = 0; i < document.Herbs_list.length; i++){
      if(document.Herbs_list[i].checked === true){
        arr.push(document.Herbs_list.plants[i].value);
      }
    }
    this.setState({selectedHerbs:arr});
    arr = [];
  }

  handleChangeSelectedFlowers(){
    let arr = [];
    for(let i = 0; i < document.Flowers_list.length; i++){
      if(document.Flowers_list[i].checked === true){
        arr.push(document.Flowers_list.plants[i].value);
      }
    }
    this.setState({selectedFlowers:arr});
    arr = [];
  }

  handleChangeFirstFrostDate( event ){
    this.setState({ firstFrostUI: event.target.value });
  }

  handleChangeLastFrostDate( event ){
    this.setState({ lastFrostUI: event.target.value });
  }

  changeFrostDates( event ){
    const { lastFrostUI, firstFrostUI } = this.state;
    if ( event.key === "Enter" && lastFrostUI.length !== 0 ) {
      this.setState({ lastFrost: lastFrostUI, lastFrostUI: "" });
    }
    if ( event.key === "Enter" && firstFrostUI.length !== 0 ) {
      this.setState({ firstFrost: firstFrostUI, firstFrostUI: "" });
    }
  }

  handleChangesNewPlantName(event){
    this.setState({nameUI:event.target.value})
  }

  handleChangesNewPlantCatagory(event){
    this.setState({catagoryUI:event.target.value})
  }

  handleChangesNewPlantFirstPlanting(event){
    this.setState({firstPlantingUI:event.target.value})
  }

  handleChangesNewPlantHowOften(event){
    this.setState({howOftenUI:event.target.value})
  }

  handleChangesNewPlantDTM(event){
    this.setState({daysToMaturityUI:event.target.value})
  }

  handleChangesNewPlantStopPlanting(event){
    this.setState({stopPlantingUI:event.target.value})
  }

  handleChangesNewPlantNotes(event){
    this.setState({notesUI:event.target.value})
  }

  createNewPlant( event ){
    event.preventDefault();
    var num = '';
    const { nameUI, catagoryUI, firstPlantingUI, howOftenUI, daysToMaturityUI, stopPlantingUI, notesUI } = this.state;
    if(howOftenUI !=="once" || howOftenUI !==""){
      num = parseInt(howOftenUI,10);
    }
    else{num = howOftenUI}
    if (nameUI.length !== 0 && catagoryUI.length !== 0 && firstPlantingUI !== undefined && howOftenUI !== "") {
      
      axios.post( 'http://localhost:3030/api/GTO', {name:nameUI, catagory:catagoryUI, firstPlanting:firstPlantingUI, howOften:num, daysToMaturity:daysToMaturityUI, stopPlanting:stopPlantingUI, notes:notesUI}).then( response => {
        this.setState({ originalPlantsObj: response.data,  nameUI:'', catagoryUI:'', firstPlantingUI:undefined, howOftenUI:undefined, daysToMaturityUI:undefined, stopPlantingUI:undefined, notesUI:'' });
      });  
    }
    else{
      console.log(nameUI);
      this.setState({  nameUI:'', catagoryUI:'', firstPlantingUI:undefined, howOftenUI:undefined, daysToMaturityUI:undefined, stopPlantingUI:undefined, notesUI:'' });
    }
  }

  render() {
    if(this.state.view===1){
      return (
        <div className="mainDiv">
        <link href="https://fonts.googleapis.com/css?family=Bevan" rel="stylesheet"/>
          <div className="headModule">
            <p className="subtitle">Welcome to Harper Family Homestead's</p>
            <h1>Garden Task Organizer</h1>
            <div className="deviderLine"/>
            <p className="mainText">Welcome to the Garden Task Organizer or GTO presented by the Harper Family Homestead. This tool has been designed to help you in planing your own bio-intensive, sucsession crop planting to maximize the output of your garden. We take your location to find your local first and last frost dates, then you select which plants you want to grow. When you press the Create Garden Task List button, your year's garden tasks organized by week will appear.</p>
          </div>
            
            <div className="dateModule">
              <p className="FrostHeader"> The first and last frost dates that we have found for your position area as follows: </p>
              <div className="dateSubDiv">
                <div className="date">Last spring frost:<u>{this.props.lastFrost.substr(0,2)}/{this.props.lastFrost.substr(2,2)}</u></div>
                <div className="date">First fall frost:<u>{this.props.firstFrost.substr(0,2)}/{this.props.firstFrost.substr(2,2)}</u></div>
              </div>
            </div>
            
            <div className="plantsModule">
              <p className="plantsHeader">Select what you want to grow below</p>
              <div className="listHolderContainer">
                <ListHolder catagory='Vegtables' handleChange={this.handleChangeSelectedVegtables} originalPlantsObj={this.state.originalPlantsObj}/>
                <ListHolder catagory='Fruits' handleChange={this.handleChangeSelectedFruits} originalPlantsObj={this.state.originalPlantsObj}/>
                <ListHolder catagory='Herbs' handleChange={this.handleChangeSelectedHerbs} originalPlantsObj={this.state.originalPlantsObj}/>
                <ListHolder catagory='Flowers' handleChange={this.handleChangeSelectedFlowers} originalPlantsObj={this.state.originalPlantsObj}/>
              </div>
              <input className="submitButton1" type="submit" value="Create Garden Task List" onClick={()=>this.setState({view:2, selectedPlants : this.state.selectedVegtables.concat(this.state.selectedHerbs, this.state.selectedFruits, this.state.selectedFlowers)})}/>
            </div>

            <div className="plantMakerModule">
              <p className="plantMakerHeader">Not seeing something you want to grow? Enter it here:</p>
              <PlantMaker handleChangesNewPlantCatagory={this.handleChangesNewPlantCatagory} handleChangesNewPlantDTM={this.handleChangesNewPlantDTM} handleChangesNewPlantFirstPlanting={this.handleChangesNewPlantFirstPlanting} handleChangesNewPlantHowOften={this.handleChangesNewPlantHowOften} handleChangesNewPlantName={this.handleChangesNewPlantName} handleChangesNewPlantNotes={this.handleChangesNewPlantNotes} handleChangesNewPlantStopPlanting={this.handleChangesNewPlantStopPlanting} createNewPlant={this.createNewPlant}/>
            </div>

            <div className="deviderLine"/>

            <p className="copyright">©2018 by Stuart Harper. All rights reserved. Harper Family Homestead and the Garden Task Organizer are properties of Stuart Harper.</p> 
        </div>
      )
    }
    else if(this.state.view===2){
      return(
        <div className="mainDiv">
          <GTL firstFrost={this.props.firstFrost} lastFrost={this.props.lastFrost} originalPlantsObj={this.state.originalPlantsObj} selectedPlants={this.state.selectedPlants}/>
        </div>
      );
    }
  }
}
  
export default GardenTaskOrganizer;
