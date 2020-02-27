import React, {Component} from 'react'

class ToDo extends Component {
    render(){
        return (
        <div>{this.props.task}</div>
        )
    }

}
export default ToDo