import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import {robots} from '../Components/robots';
import Scroll from '../Components/Scroll';

class App extends React.Component
{
	constructor()
	{
		super()
		this.state={
			robots:[],
			searchField:''
		}
	}
	
	onSearchChange=(event)=>
	{
		this.setState({searchField:event.target.value})
		
		
	}
	componentDidMount()
	{
		//fetch('https://jsonplaceholder.typicode.com/users')
		//.then(response=> response.json)
		//.then(users=> this.setState({robots:users}));
		this.setState({robots:robots})
	}
	
render(){
{
	const filteredRobots = this.state.robots.filter(robot=>
		{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
	return(
	
	<div className='tc'>
	<h1>Robo Friends</h1>
	<SearchBox searchChange={this.onSearchChange}/>
	<Scroll>
	<CardList robots={filteredRobots}/>
	</Scroll>
	</div>
	);
}
}
}
export default App;