import React from 'react';
import './content.css';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

class Content extends React.Component{

    componentDidMount(){
    }

    handleCheck = () =>{
        this.props.checked(this.props.todo);
        this.props.filter(this.props.filterType);
    }

    render(){
        return (
            <div>
                <Checkbox onChange={this.handleCheck} checked={(this.props.todo.status==='completed') ? true : false}>
                    <span className={this.props.todo.status}>{this.props.todo.content}</span>
                </Checkbox>
            </div>
        );
    }
}

export default Content;