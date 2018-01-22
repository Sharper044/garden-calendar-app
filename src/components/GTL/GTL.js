import React, { Component } from 'react';
import '../../reset.css';
import './GTL.css';
import GTLItem from './GTLItem/GTLItem.js';

class GTL extends Component{
    constructor(props){
        super(props);

        this.state={
            lastFrost:this.props.lastFrost,
            firstFrost:this.props.firstFrost,
            originalPlantsObj:this.props.originalPlantsObj,
            selectedPlants:this.props.selectedPlants.push(9,10),
            weekTasks:[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],
            weekNames:['Jan 1-7','Jan 8-14','Jan 15-21','Jan 22-28','Jan 29-Feb 4','Feb 5-11','Feb 12-18','Feb 19-25','Feb 26-Mar 4','Mar 5-11','Mar 12-18','Mar 19-25','Mar 26-Apr 1','Apr 2-8','Apr 9-15','Apr 16-22','Apr 23-29','Apr 30-May 6','May 7-13','May 14-20','May 21-27','May 28-Jun 3','Jun 4-10','Jun 11-17','Jun 18-24','Jun 25-Jul 1','Jul 2-8','Jul 9-15','Jul 16-22','Jul 23-29','Jul 30-Aug 5','Aug 6-12','Aug 13-19','Aug 20-26','Aug 27-Sep 2','Sep 3-9','Sep 10-16','Sep 17-23','Sep 24-30','Oct 1-7','Oct 8-14','Oct 15-21','Oct 22-28','Oct 29-Nov 4','Nov 5-11','Nov 12-18','Nov 19-25','Nov 26-Dec 1','Dec 2-8','Dec 9-15','Dec 16-22','Dec 23-31'],
            weekObjects:[]
        }
        this.findWeek=this.findWeek.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this)
    }

    findWeek(date){
        var newDate = parseInt(date,10), weekNum = 0;
        if(date>=101 && date<=107){ weekNum = 0 }
        else if(date>=108 && date<=114){ weekNum = 1 }
        else if(date>=115 && date<=121){ weekNum = 2 }
        else if(date>=122 && date<=128){ weekNum = 3 }
        else if(date>=129 && date<=204){ weekNum = 4 }
        else if(date>=205 && date<=211){ weekNum = 5 }
        else if(date>=212 && date<=218){ weekNum = 6 }
        else if(date>=219 && date<=225){ weekNum = 7 }
        else if(date>=226 && date<=304){ weekNum = 8 }
        else if(date>=305 && date<=311){ weekNum = 9 }
        else if(date>=312 && date<=318){ weekNum = 10 }
        else if(date>=319 && date<=325){ weekNum = 11 }
        else if(date>=326 && date<=401){ weekNum = 12 }
        else if(date>=402 && date<=408){ weekNum = 13 }
        else if(date>=409 && date<=415){ weekNum = 14 }
        else if(date>=416 && date<=422){ weekNum = 15 }
        else if(date>=423 && date<=429){ weekNum = 16 }
        else if(date>=430 && date<=506){ weekNum = 17 }
        else if(date>=507 && date<=513){ weekNum = 18 }
        else if(date>=514 && date<=520){ weekNum = 19 }
        else if(date>=521 && date<=527){ weekNum = 20 }
        else if(date>=528 && date<=603){ weekNum = 21 }
        else if(date>=604 && date<=610){ weekNum = 22 }
        else if(date>=611 && date<=617){ weekNum = 23 }
        else if(date>=618 && date<=624){ weekNum = 24 }
        else if(date>=625 && date<=701){ weekNum = 25 }
        else if(date>=702 && date<=708){ weekNum = 26 }
        else if(date>=709 && date<=715){ weekNum = 27 }
        else if(date>=716 && date<=722){ weekNum = 28 }
        else if(date>=723 && date<=729){ weekNum = 29 }
        else if(date>=730 && date<=805){ weekNum = 30 }
        else if(date>=806 && date<=812){ weekNum = 31 }
        else if(date>=813 && date<=819){ weekNum = 32 }
        else if(date>=820 && date<=826){ weekNum = 33 }
        else if(date>=827 && date<=902){ weekNum = 34 }
        else if(date>=903 && date<=909){ weekNum = 35 }
        else if(date>=910 && date<=916){ weekNum = 36 }
        else if(date>=917 && date<=923){ weekNum = 37 }
        else if(date>=924 && date<=930){ weekNum = 38 }
        else if(date>=1001 && date<=1007){ weekNum = 39 }
        else if(date>=1008 && date<=1014){ weekNum = 40 }
        else if(date>=1015 && date<=1021){ weekNum = 41 }
        else if(date>=1022 && date<=1028){ weekNum = 42 }
        else if(date>=1029 && date<=1104){ weekNum = 43 }
        else if(date>=1105 && date<=1111){ weekNum = 44 }
        else if(date>=1112 && date<=1118){ weekNum = 45 }
        else if(date>=1119 && date<=1125){ weekNum = 46 }
        else if(date>=1126 && date<=1201){ weekNum = 47 }
        else if(date>=1202 && date<=1208){ weekNum = 48 }
        else if(date>=1209 && date<=1215){ weekNum = 49 }
        else if(date>=1216 && date<=1222){ weekNum = 50 }
        else if(date>=1223 && date<=1231){ weekNum = 51 }
        return weekNum;
    }

    componentDidMount(){
        var lFWeekNum = this.findWeek(this.state.lastFrost), fFWeekNum = this.findWeek(this.state.firstFrost);
        var workingWeekTasks=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
        workingWeekTasks[lFWeekNum].push("Last spring frost");
        workingWeekTasks[fFWeekNum].push("First Auttum frost");
        console.log(this.props.originalPlantsObj);
        for(let i = 0; i<this.props.selectedPlants.length; i++){
            let index = this.props.originalPlantsObj.findIndex((x)=>{
                return(x['id'] === parseInt(this.props.selectedPlants[i],10))
            });
            let timeStart = Math.round(this.state.originalPlantsObj[index].firstPlanting/7);
            if(this.state.originalPlantsObj[index].howOften==='once' && this.state.originalPlantsObj[index].catagory !== 'garden chore' && this.state.originalPlantsObj[index].catagory !== 'garden chore w'){
                workingWeekTasks[(lFWeekNum+timeStart)].push(`Plant ${this.state.originalPlantsObj[index].name}.`)
            }
            else if(this.state.originalPlantsObj[index].catagory !== 'garden chore' && this.state.originalPlantsObj[index].catagory !== 'garden chore w'){
                let timeStop = Math.round(this.state.originalPlantsObj[index].stopPlanting/7);
                let incrementor = Math.round(this.state.originalPlantsObj[index].howOften/7);
                for(let j = (timeStart+lFWeekNum); j <= (fFWeekNum+timeStop); j += incrementor){
                    workingWeekTasks[j].push(`Plant ${this.state.originalPlantsObj[index].name}.`)
                }
            }
            else if(this.state.originalPlantsObj[index].catagory === 'garden chore'){
                workingWeekTasks[(lFWeekNum+timeStart)].push(this.state.originalPlantsObj[index].name)
            }
            else if(this.state.originalPlantsObj[index].catagory === 'garden chore w'){
                workingWeekTasks[(fFWeekNum+timeStart)].push(this.state.originalPlantsObj[index].name)
            }
        }
        let arr = [];
        for(let k=0; k < 52; k++){
            arr.push({name:this.state.weekNames[k], tasks:workingWeekTasks[k]});
        }
        this.setState({weekTasks:workingWeekTasks, weekObjects: arr});
    }

    render(){
        return(
            <div>
                {this.state.weekObjects.map(x=>{
                    if(x.tasks.length){
                        return(
                            <GTLItem name={x.name} tasks={x.tasks}/>
                        )
                    }
                })

                }
            </div>
        )
    }
}
export default GTL;