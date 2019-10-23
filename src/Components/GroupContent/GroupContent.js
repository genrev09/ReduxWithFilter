import React from 'react';
import Content from '../Content/content';
import './groupcontent.css';
import TodoResource from '../Resource/TodoResource';
import { Button, Input, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

export default class GroupContent extends React.Component{
    
    handleClick = e => {
        this.props.filterTypeChanged(e.key);
        this.props.filterContent(e.key);
    };

    componentDidMount(){
        TodoResource.getAll()
        .then(res => res.json()).then(res => this.props.refreshContent(res._embedded.todos));
    }
   
    addText = () =>{ 
        this.props.addContent(this.props.inputText);
        this.props.filterContent(this.props.filterType);
    }

    handleInputChange = (event) => this.props.textChanged(event.target.value);

    render(){
        return (
            <div id="containerID" class="container">
                <Menu onClick={this.handleClick} selectedKeys={this.props.filterType} mode="horizontal">
                    <Menu.Item key="all">
                        <Icon type="filter" />All
                    </Menu.Item>
                    <Menu.Item key="active">
                        <Icon type="filter" />Active
                    </Menu.Item>
                    <Menu.Item key="completed">
                        <Icon type="filter" />Complete
                    </Menu.Item>
                </Menu>
                
                {/* <div class="center"> */}
                    <h2>To Do exercise</h2>
                    <Input type ="text" className="input-text" value={this.props.inputText} onChange={this.handleInputChange} placeholder="Enter a text here" />
                    <Button type="primary" id="button" onClick={this.addText}>Add Text</Button>
                {/* </div> */}
                
                <ol id="filters">
                    {this.props.textList.map((todo) => (
                        <li key={todo.id}>
                            <Content key={todo.id} todo={todo} checked={this.props.checked} filterType={this.props.filterType} filter={this.props.filterContent} />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}