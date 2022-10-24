import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

//by using props.results.meanings.map we are looping through all existing meanings of the word, since in most cases words have more than one meaning (we can see it by logging the results object)
export default function Results(props) {
	console.log(props.results);
	if (props.results) {
		return (
			<div className="Results">
				<h2>{props.results.word}</h2>

				{props.results.phonetics.map(function (phonetic, index) {
					return (
						<div key={index}>
							<Phonetic phonetic={phonetic} />
						</div>
					);
				})}

				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
