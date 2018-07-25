import React, {Component} from "react";
import {connect} from "react-redux";
import FieldType from "../../components/FieldType/FieldType";
import FieldSelector from "../../components/FieldSelector/FieldSelector";
import * as actions from "../../store/actions/index";


import grassyField from "../../assets/images/backgrounds/Grassy_Field.jpg";
import ocean from "../../assets/images/backgrounds/Ocean.png";
import cave from "../../assets/images/backgrounds/Cave.png";
import city from "../../assets/images/backgrounds/city.png";
import desert from "../../assets/images/backgrounds/desert.jpg";
import forest from "../../assets/images/backgrounds/forest.png";
import mountain from "../../assets/images/backgrounds/mountain.png";
import river from "../../assets/images/backgrounds/river.png";
import snow from "../../assets/images/backgrounds/snow.png";


class CatchingArea extends Component {

	componentDidUpdate() {
		if (this.props.fieldType) {
			this.props.onSpawn(this.props.spawned, this.props.captured, this.props.fieldType);
		}
	}

	onClickHandler = () => {
		this.props.onCapture();
		this.props.onRecordCapture(this.props.id, this.props.shiny)//this.props.pokedex[this.props.id].id);
	}

	onConfirmHandler = () => {
		this.props.onConfirm();
	}
			
	render() {
		let field = null;

		if (!this.props.fieldType) {
			field = (
				<div>
					<FieldSelector field = "Grassy Field" description = "..." clicked = {() => this.props.onChangeField("grassy")}/>
					<FieldSelector field = "Ocean" description = "..." clicked = {() => this.props.onChangeField("ocean")}/>
					<FieldSelector field = "Cave" description = "..." clicked = {() => this.props.onChangeField("cave")}/>
					<FieldSelector field = "Snowy Field" description = "..." clicked = {() => this.props.onChangeField("snow")}/>
					<FieldSelector field = "River" description = "..." clicked = {() => this.props.onChangeField("river")}/>
					<FieldSelector field = "Mountain" description = "..." clicked = {() => this.props.onChangeField("mountain")}/>
					<FieldSelector field = "City" description = "..." clicked = {() => this.props.onChangeField("city")}/>
					<FieldSelector field = "Desert" description = "..." clicked = {() => this.props.onChangeField("desert")}/>
					<FieldSelector field = "Forest" description = "..." clicked = {() => this.props.onChangeField("forest")}/>
				</div>
			);
		} else if (this.props.fieldType === "grassy") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {grassyField} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "ocean") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {ocean} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "cave") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {cave} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "forest") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {forest} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "desert") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {desert} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "mountain") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {mountain} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "snow") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {snow} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "city") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {city} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		} else if (this.props.fieldType === "river") {
			field = (
				<FieldType 
					clicked = {this.onClickHandler} 
					background = {river} 
					captured = {this.props.captured} 
					spawned = {this.props.spawned}
					shiny = {this.props.shiny}
					confirm = {this.onConfirmHandler}
					pokemon = {this.props.pokedex[this.props.id].name}
					sprite = {this.props.pokedex[this.props.id].sprite}
					shinySprite = {this.props.pokedex[this.props.id].shinySprite}/>
			);
		}

		return(
			<div>
				{field}
				{this.props.fieldType ? <button onClick = {() => this.props.onClearField()}>Back to Selection</button> : null }	
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		captured: state.catching.captured,
		spawned: state.catching.spawned,
		shiny: state.catching.shiny,
		id: state.catching.id,
		pokedex: state.pokedex.pokedex,
		fieldType: state.catching.fieldType
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onCapture: () => dispatch(actions.capturePokemon()),
		onSpawn: (spawned, captured, fieldType) => dispatch(actions.checkSpawnPokemon(spawned, captured, fieldType)),
		onConfirm: () => dispatch(actions.confirmCapture()),
		onRecordCapture: (id, shiny) => dispatch(actions.recordCapture(id, shiny)),
		onChangeField: (field) => dispatch(actions.changeField(field)),
		onClearField: () => dispatch(actions.clearField())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CatchingArea);