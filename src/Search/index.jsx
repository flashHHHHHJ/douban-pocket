import React, { Component } from 'react';
import './index.css';

class Search extends Component{
    constructor(props){
        super(props)
    }
    handleKeyUp(event){
        if(event.keyCode === 13){
            const value = event.target.value;
            if(value){
                this.props.onChange(value);
                event.target.value = '';
            }
        }
    }
    render(){
        return(
            <div className="searchingBar">
                <input className="keyword" type="text" placeholder="书名、作者、ISBN" onKeyUp={this.handleKeyUp.bind(this)} ref={input => this.input = input} />
                <div className="searchingBtn">搜索</div>
            </div>
        )
    }
}

module.exports = Search;