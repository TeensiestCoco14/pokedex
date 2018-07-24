import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

import "./Pokedex.css";

import Display from "../../components/Dex/Display/Display";
import Selector from "../../components/Dex/Selector/Selector";



class Pokedex extends Component {


	state = {
		displayPage: {
			captureInfo: false,
			description: false
		},
		showPageOptions: false
	}

	onClickHandler = (entry) => {
		this.props.onChangeDisplay(entry);
		this.setState({
			displayPage: {
				captureInfo: false,
				description: false
			},
			showPageOptions: true
		});
	}

	toCaptureInfo = () => {
		this.setState({
			displayPage: {
				captureInfo: true
			},
			showPageOptions: false
		});
	};

	toDescription = () => {
		this.setState({
			displayPage: {
				description: true
			},
			showPageOptions: false
		});
	};

	toPageSelection = () => {
		this.setState({
			displayPage: {
				captureInfo: false,
				description: false
			},
			showPageOptions: true
		});
	};


	render() {
		return(
			<div className = "Pokedex">
				<Display 
					showPageOptions = {this.state.showPageOptions}
					showPage = {this.state.displayPage} 
					displayed = {this.props.displayed}
					toCaptureInfo = {this.toCaptureInfo}
					toDescription = {this.toDescription}
					backToOptions = {this.toPageSelection}/>
				<Selector pokedex = {this.props.pokedex}  clicked = {(entry) => this.onClickHandler(entry)}/>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		pokedex: state.pokedex.pokedex,
		displayed: state.pokedex.displayed,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onChangeDisplay: (pokemonData) => dispatch(actions.changeDisplay(pokemonData))
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);