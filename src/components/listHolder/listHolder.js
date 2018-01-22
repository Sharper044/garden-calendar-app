import React, { Component } from 'react';
import '../../reset.css';
import './listHolder.css';

class ListHolder extends Component{
    //There are several Props this will recive:
    //  1. the appropreate handle change function that will be called any time a checkbox is clicked.
    //  2. the originalPlantsObject array.
    //  3. the plant type it is listing. (vegtable, fruit, herb, flower)
    //The component will run a loop to determane which objects match the type has been given it and then push
    //those into an unordered list with a checkbox. Then it will display that list with the title dirived 
    //from the type passed in (prop 3) when a checkbox is clicked the callback function (prop 1) will be invoked.
    

    render(){
        var plantsObj = this.props.originalPlantsObj;
        (Array.isArray(plantsObj))?(plantsObj = plantsObj.filter((x)=>x.catagory===this.props.catagory)):(plantsObj=[]);
        var clickHandler = this.props.handleChange;
        return(
            <div className="componentHolder">
                {this.props.catagory}<br/>
                <form name={`${this.props.catagory}_list`}>
                    {
                        plantsObj.map(function(object){
                            return(
                                <div>
                                    <input type="checkbox" name="plants" value={object.id} onClick={clickHandler}/>
                                    <label for={object.id}>{object.name}</label>
                                </div>
                            )
                        })
                    }
                </form>
            </div>
        )
    }

}
export default ListHolder;