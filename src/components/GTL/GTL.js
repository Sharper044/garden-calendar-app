import React, { Component } from 'react';
import '../../reset.css';
import './GTL.css';
//import GTLItem from './GTLItem/GTLItem.js';

class GTL extends Component{
    constructor(props){
        super(props);

        this.state={
            lastFrost:this.props.lastFrost,
            firstFrost:this.props.firstFrost,
            originalPlantsObj:this.props.originalPlantsObj,
            selectedPlants:this.props.selectedPlants,
            weekTasks:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
            weekNames:['Jan 1-7','Jan 8-14','Jan 15-21','Jan 22-28','Jan 29-Feb 4','Feb 5-11','Feb 12-18','Feb 19-25','Feb 26-Mar 4','Mar 5-11','Mar 12-18','Mar 19-25','Mar 26-Apr 1','Apr 2-8','Apr 9-15','Apr 16-22','Apr 23-29','Apr 30-May 6','May 7-13','May 14-20','May 21-27','May 28-Jun 3','Jun 4-10','Jun 11-17','Jun 18-24','Jun 25-Jul 1','Jul 2-8','Jul 9-15','Jul 16-22','Jul 23-29','Jul 30-Aug 5','Aug 6-12','Aug 13-19','Aug 20-26','Aug 27-Sep 2','Sep 3-9','Sep 10-16','Sep 17-23','Sep 24-30','Oct 1-7','Oct 8-14','Oct 15-21','Oct 22-28','Oct 29-Nov 4','Nov 5-11','Nov 12-18','Nov 19-25','Nov 26-Dec 1','Dec 2-8','Dec 9-15','Dec 16-22','Dec 23-31']
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}
export default GTL;