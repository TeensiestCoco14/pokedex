import React, {Component} from "react";
import {connect} from "react-redux";


import FieldType from "../../components/FieldType/FieldType";
import FieldSelector from "../../components/FieldSelector/FieldSelector";

import * as actions from "../../store/actions/index";


import grassyField from "../../assets/images/backgrounds/Grassy_Field.jpg";
import ocean from "../../assets/images/backgrounds/Ocean.png";
import cave from "../../assets/images/backgrounds/Cave.png";

class CatchingArea extends Component {

	state = {
		fieldType: null
	};

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

	onGrassyHandler = () => {
		this.setState({fieldType: "grassy"});
	}

	onOceanHandler = () => {
		this.setState({fieldType: "ocean"});
	}

	onCaveHandler = () => {
		this.setState({fieldType: "cave"});
	}

	render() {
		return(
			<div>
				{this.state.fieldType === null ? <div>
					<FieldSelector field = "Grassy Field" description = "..." clicked = {this.onGrassyHandler}/>
					<FieldSelector field = "Ocean" description = "..." clicked = {this.onOceanHandler}/>
					<FieldSelector field = "Cave" description = "..." clicked = {this.onCaveHandler}/>
			</div> : null}

				{this.state.fieldType === "grassy" ? <FieldType 
					clicked = {this.onClickHandler} 
					background = {grassyField} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}/> : null}

				{this.state.fieldType === "ocean" ? <FieldType 
					clicked = {this.onClickHandler} 
					background = {ocean} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}/> : null}

				{this.state.fieldType === "cave" ? <FieldType 
					clicked = {this.onClickHandler} 
					background = {ocean} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}/> : null}


				{this.state.fieldType ? <button onClick = {() => {this.setState({fieldType: null})}}>Back to Selection</button> : null }
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