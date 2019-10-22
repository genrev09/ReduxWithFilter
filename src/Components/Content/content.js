import React from 'react';
import './content.css';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {isChecked: false,
        classValue: ''};
    }

    handleCheck = () =>{
        this.setState({isChecked: !this.state.isChecked});
    }

    render(){
        return (
            <div>
                <input type="checkbox" onChange={this.handleCheck}/>
                <span className={this.state.isChecked ? 'checked' : ''}>{this.props.value}</span>
            </div>
        );
    }
}

export default Content;