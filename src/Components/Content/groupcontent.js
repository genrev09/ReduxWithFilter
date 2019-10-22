import React from 'react';
import Content from './content';
import './groupcontent.css';

class GroupContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {inputValue: '',
        lists: []};
    }
    
    addText = () =>{
        this.setState(state => {
            const list = state.lists.push(<Content key={state.inputValue} value={state.inputValue}/>);
            return {list, inputValue: ''} ;
        });
    
    }

    handleInputChange = (event) => this.setState({inputValue: event.target.value});

    render(){
        return (
            <div className="container" id="containerID">
                <h2>To Do exercise</h2>
                <p>Input a text</p>
                <input type ="text" className="input-text" value={this.state.inputValue} onChange={this.handleInputChange}></input>
                <button id="button" onClick={this.addText}>Add Text</button>
                <ol id="filters">
                    {this.state.lists.map((item,i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ol>
                
            </div>
        );
    }
}

export default GroupContent;