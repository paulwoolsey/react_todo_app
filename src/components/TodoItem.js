import React from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {	
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textAlign: 'left',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	

	render() {
		const { id, title } = this.props.todo;

		return (
			<div className="todoItem" style={this.getStyle()} >
				
				<p className="todoItemTitle">
					<input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> 
					{title}
					<button className="cancel" onClick={this.props.delTodo.bind(this, id)}> X </button>
				</p>
			</div>
		);
	}
}

//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
}

export default TodoItem;