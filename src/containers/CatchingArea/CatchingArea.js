import React, {Component} from "react";
import {connect} from "react-redux";
import FieldType from "../../components/FieldType/FieldType";
import * as actions from "../../store/actions/index";


import grassyField from "../../assets/images/backgrounds/Grassy_Field.jpg";

class CatchingArea extends Component {

	componentDidMount() {
		this.props.onSpawn(this.props.spawned, this.props.captured);
	}

	componentDidUpdate() {
		this.props.onSpawn(this.props.spawned, this.props.captured);
	}

	onClickHandler = () => {
		this.props.onCapture();
		this.props.onRecordCapture(this.props.id)//this.props.pokedex[this.props.id].id);
	}

	onConfirmHandler = () => {
		this.props.onConfirm();
	}

	render() {
		return(
			<div>
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {grassyField} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		captured: state.catching.captured,
		spawned: state.catching.spawned,
		id: state.catching.id,
		pokedex: state.pokedex.pokedex
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onCapture: () => dispatch(actions.capturePokemon()),
		onSpawn: (spawned, captured) => dispatch(actions.checkSpawnPokemon(spawned, captured)),
		onConfirm: () => dispatch(actions.confirmCapture()),
		onRecordCapture: (id) => dispatch(actions.recordCapture(id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CatchingArea);