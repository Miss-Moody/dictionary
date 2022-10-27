import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

//by using props.results.meanings.map we are looping through all existing meanings of the word, since in most cases words have more than one meaning (we can see it by logging the results object)
export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<h2>{props.results.word}</h2>

					{props.results.phonetics.map(function (phonetic, index) {
						return (
							<div key={index}>
								<Phonetic phonetic={phonetic} />
							</div>
						);
					})}
				</section>
				{props.results.meanings.map(function (meaning, index) {
					return (
						<section key={index}>
							<Meaning meaning={meaning} />
						</section>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
