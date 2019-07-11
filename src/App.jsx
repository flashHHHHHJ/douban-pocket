import React, { Component } from 'react';
import './style.css';
import Search from './Search/index'
import Navigation from './Navigation/index';
import Maincontent from './Maincontent/index'

class App extends Component {
    constructor(){
        super()
        this.state = {
            tabActiveIndex: 0,
            keyword: []
        }
    }
    onChange(value){
        // const arr = this.state.keyword
        // arr.push(value)
        this.setState({
            keyword: value
        })
    }
    handleClick(id){
        this.setState({
            tabActiveIndex: id,
            keyword: []
        })
    }
    render() {
        return (
        <div className="app">
            <Search onChange={this.onChange.bind(this)}/>
            <Maincontent tabActiveIndex={this.state.tabActiveIndex} keyword={this.state.keyword} />
            <Navigation handleClick={this.handleClick.bind(this)}/>
        </div>
        );
    }
}

module.exports = App;


