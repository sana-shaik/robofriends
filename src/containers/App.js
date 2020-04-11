import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBounday';


class App extends Component {
		constructor (){
			super()
			this.state = {
				robots: [] ,
				searchfield: ''
			}
		}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots : users}));
		
		}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}


	render() {
    const {robots, searchfield} = this.state;
			
		const filteredRobots = robots.filter(robots => {
		return robots.name.toLowerCase().includes(searchfield.toLowerCase())

			})

		if (robots.length === 0){
			return <h1> Loading </h1>
		} 

		else {

			return (
		
				<div className='tc'>
				<h1 className='f1'> Robo Friends </h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredRobots} />
					</ErrorBoundary>
					
				</Scroll>
			</div>
			); 
		}
	}
}

export default App;