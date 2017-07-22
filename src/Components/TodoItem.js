import React, { Component } from 'react';


class TodoItem extends Component {
	
  render() {
   
    return (
      <li className="ProjectItem">
        {this.props.todo.id} -{this.props.todo.title}
      </li>
    );
  }
}
TodoItem.propTypes ={
	todo:React.PropTypes.object,
	onDelete:React.PropTypes.func
}
export default TodoItem;
