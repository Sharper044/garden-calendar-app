import React, { Component } from 'react';
import '../../../reset.css';
import './GTLItem.css';

class GTLItem extends Component{

    render(){
        return(
            <div>
                <h6>{this.props.name}</h6>
                <ul>
                    {
                        this.props.tasks.map((x)=>{
                            return(<li>{x}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default GTLItem;