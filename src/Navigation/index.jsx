import React, { Component } from 'react'
import './index.css'

class Navigation extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="navigation">
				<div className="navi-container">
					<ul className="item-container">
						<li className={"item-title"} onClick={this.props.handleClick.bind(this, 0)}>
							<span className="item-title-text">图书</span>
						</li>
						<li className={"item-title"} onClick={this.props.handleClick.bind(this, 1)}>
							<span className="item-title-text">音乐</span>
						</li>
						<li className={"item-title"} onClick={this.props.handleClick.bind(this, 2)}>
							<span className="item-title-text">电影</span>
						</li>					
					</ul>
				</div>
			</div>
		)
    }
}
export default Navigation