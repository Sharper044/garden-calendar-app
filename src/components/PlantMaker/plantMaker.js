import React, { Component } from 'react';
import '../../reset.css';
import './plantMaker.css';

class PlantMaker extends Component{

    render(){
        return(
            <form name="newPlantMaker">
                <label for="name">Plant Name:</label>
                <input id="name" type="text" onChange={this.props.handleChangesNewPlantName}/><br/>
                
                <label for="catagory">Plant Catagory:</label>
                <div id="catagory">
                    <input type="radio" id="Vegtables" name="contact" value="Vegtables" onClick={this.props.handleChangesNewPlantCatagory}/>
                    <label for="Vegtables">Vegtable</label>
                    <input type="radio" id="Fruits" name="contact" value="Fruits" onClick={this.props.handleChangesNewPlantCatagory}/>
                    <label for="Fruits">Fruit</label>
                    <input type="radio" id="Herbs" name="contact" value="Herbs" onClick={this.props.handleChangesNewPlantCatagory}/>
                    <label for="Herbs">Herb</label>
                    <input type="radio" id="Flowers" name="contact" value="Flowers" onClick={this.props.handleChangesNewPlantCatagory}/>
                    <label for="Flowers">Flower</label>
                </div>
                <label for="firstPlanting">Day to start planting in relation to last frost:</label>
                <input id="firstPlanting" type="number" placeholder="Days after last frost is positive. Before last frost is negative." onChange={this.props.handleChangesNewPlantFirstPlanting}/><br/>
                <label for="howOften">How often you want to plant in days:</label>
                <input id="howOften" type="text" placeholder="Enter a number in days or the word 'once' if you want to just plant once." onChange={this.props.handleChangesNewPlantHowOften}/><br/>
                <label for="daysToMaturity">Days to Maturity:</label>
                <input id="daysToMaturity" type="number" onChange={this.props.handleChangesNewPlantDTM}/><br/>
                <label for="stopPlanting">Day to stop planting in relation to first frost:</label>
                <input id="stopPlanting" type="number" placeholder="Days after first frost is positive. Before first frost is negative." onChange={this.props.handleChangesNewPlantStopPlanting}/><br/>
                <label for="notes">Notes:</label>
                <input id="notes" type="text" onChange={this.props.handleChangesNewPlantNotes}/><br/>
                <input type="submit" value="Add Plant" onClick={this.props.createNewPlant}/>
            </form>
        )
    }

}
export default PlantMaker;