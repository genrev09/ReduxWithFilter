import React from 'react';
import './content.css';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {checked: false,
        classValue: ''};
    }

    handleCheck = () =>{
        this.setState({checked: !this.state.checked});
        if(this.state.checked){
            this.setState({classValue: 'checked'});
        }
        else{
            this.setState({classValue: ''});
        }
    }

    render(){
        return (
            <div>
                <input type="checkbox" className={this.state.classValue} onChange={this.handleCheck}/>
                <span>{this.props.value}</span>
            </div>
        );
    }
}

export default Content;