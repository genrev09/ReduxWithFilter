import React from 'react';
import './content.css';

class Content extends React.Component{

    handleCheck = () =>{
        this.props.checked();
    }

    render(){
        return (
            <div>
                <input type="checkbox" onChange={this.handleCheck}/>
                <span className={this.props.check ? 'checked' : ''}>{this.props.value}</span>
            </div>
        );
    }
}

export default Content;