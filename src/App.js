import React, { Component } from 'react';
import './reset.css';
import './App.css';
import GardenTaskOrganizer from './components/GTO/gardenTaskOrganizer.js'
import axios from 'axios';
import url from './api.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      latitude: 0,
      longitude: 0,
      lastFrost: "",
      firstFrost: "",
      stationId: "",
      cycles: 0
    }

    this.componentWillMount=this.componentWillMount.bind(this);
  }

  componentWillMount(){          
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }); 
      var stationArr = [];
      axios.get(`${url.weatherStation}?lat=${this.state.latitude}&lon=${this.state.longitude}`).then((response)=>{
        stationArr = response.data;
        var distance = stationArr[0]["distance"], id = stationArr[0]["id"];
        for(let i=0; i < stationArr.length; i++){
          if (stationArr[i]["distance"] < distance) {
            id = stationArr[i]["id"];
          }
        }
        this.setState({stationId: id});
        axios.get(`${url.frostDates}?station=${this.state.stationId}&season=1`).then((response)=>{
          this.setState({
            lastFrost: response.data[2]["prob_50"]
          });
          axios.get(`${url.frostDates}?station=${this.state.stationId}&season=2`).then((response)=>{
            this.setState({
              firstFrost: response.data[4]["prob_50"]
            });
          });
        });
      }).catch(console.error);
    });
    let cycle = this.state.cycles;
    this.setState({cycles: cycle+1});
  }

  // shouldComponentUpdate(){
  //   return (this.state.cycles < 4 && this.state.lastFrost !=="");
  // }

  render() {
    return (
      <div className="App">
        <GardenTaskOrganizer lastFrost={this.state.lastFrost} firstFrost={this.state.firstFrost}/>
      </div>
    );
  }
}

export default App;
