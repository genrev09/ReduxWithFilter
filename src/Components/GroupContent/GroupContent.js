import React from 'react';
import Content from '../Content/content';
import './groupcontent.css';

export default class GroupContent extends React.Component{
    
    addText = () =>{ this.props.addContent(this.props.inputText); }

    handleInputChange = (event) => this.props.textChanged(event.target.value);

    render(){
        return (
            <div className="container" id="containerID">
                <h2>To Do exercise</h2>
                <p>Input a text</p>
                <input type ="text" className="input-text" value={this.props.inputText} onChange={this.handleInputChange}></input>
                <button id="button" onClick={this.addText}>Add Text</button>
                <ol id="filters">
                    {this.props.textList.map((text,i) => (
                        <li key={i}>
                            <Content key={i} value={text} check={this.props.isChecked} checked={this.props.checked}/>
                        </li>
                    ))}
                </ol>
                
            </div>
        );
    }
}