import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import uuid from 'uuid'

class AddProject extends Component {

   constructor(){
	   super();
	   this.state ={
		   newProject:{}
	   }
   }
    static defaultProps ={
		categories:['Fruit','Vagetable','Drink']
	}
	handleSubmit(e){
		if(this.refs.title.value ===''){
			alert('Title required')
		}else{
			this.setState({
				newProject:{
					id:uuid.v4(),
					title:this.refs.title.value,
					category:this.refs.category.value
				}
			},function(){
				
				this.props.addProject(this.state.newProject);
			})
		}
		e.preventDefault();
	}
  render() {
    let categoryOptions =this.props.categories.map(category=>{
		return <option key={category} value={category}>{category}</option>
	});
    return (
      <div>
		<h3>Add Project</h3>
		<form onSubmit={this.handleSubmit.bind(this)}> 
			<div>
				<labale>Title</labale><br/>
				<input type="text" ref="title"/>
			</div>
			<br/>
			<div>
				<labale>Category</labale><br/>
				<select ref="category">
				{categoryOptions}
				</select>
			</div>
			<br/>
			<input type="submit" value="Submit" />
		
		</form>
      </div>
    );
  }
}
AddProject.propTypes ={
	categories:React.PropTypes.array,
	addProject:React.PropTypes.func
}

export default AddProject;
