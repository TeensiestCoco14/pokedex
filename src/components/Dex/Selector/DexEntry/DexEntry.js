import React from "react";

<<<<<<< HEAD
import "./DexEntry";

const dexEntry = (props) => {

=======
const dexEntry = (props) => {

	const style = {
		padding: "5px",
		border: "1px solid #f2f3f4"
	}

>>>>>>> f8055c1fcbbd5e3af08ba1a8615c789f9a5d73b0
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
<<<<<<< HEAD
				<tr  key = {entry.name} onClick = {() => props.clicked(entry)}>
=======
				<tr key = {entry.name} onClick = {() => props.clicked(entry)}>
>>>>>>> f8055c1fcbbd5e3af08ba1a8615c789f9a5d73b0
					<td>{entry.id}</td>
					<td>{entry.name}</td>
					<td>{entry.count}</td>
				</tr>
			)
		}
	})

	return(
<<<<<<< HEAD
		<div className = "DexEntry">
=======
		<div style = {{margin: "auto", padding: "5px"}}>
>>>>>>> f8055c1fcbbd5e3af08ba1a8615c789f9a5d73b0
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