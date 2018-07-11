import React from "react";
import "./DexEntry.css";

const dexEntry = (props) => {

	const style = {
		padding: "5px",
		border: "1px solid #f2f3f4"
	}


	let pokedex = [];
	pokedex = props.pokedex.map(entry => {
		if (entry.captured === false) {
			return(
				<tr key = {entry.name}>
					<td>???</td>
					<td>?????????</td>
					<td>0</td>
				</tr>
			);
		} else {
			return(
				<tr key = {entry.name} onClick = {() => props.clicked(entry)}>
					<td>{entry.id}</td>
					<td>{entry.name}</td>
					<td>{entry.count}</td>
				</tr>
			)
		}
	})

	return(
		<div className = "DexEntry">
			<table>
				<thead>
					<tr>
						<th>Entry Number</th>
						<th>Name</th>
						<th>Captured</th>
					</tr>
				</thead>
				<tbody>
					{pokedex}
				</tbody>
			</table>
		</div>
	);
}

export default dexEntry;