import React from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends React.Component {
	state = {
		title: ''
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value});
	onSubmit = (e) => {
		e.preventDefault();
		this.props.AddTodo(this.state.title);
		this.setState({title: ''});
	};
	render() {
		return (
			<form style={{ display: 'flex' }} onSubmit={this.onSubmit} >
				<input 
					type="text" 
					name="title" 
					placeholder="Add Todo..." 
					style={{ flex: '10', padding: '5px' }}
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input 
					type="submit" 
					value="submit" 
					className="submit"
					style={{flex: '1'}}
				/>
			</form>
		);
	}
}

//PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
}
