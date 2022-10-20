import React from "react";

//  props.meaning.definitions.map(function(definition, index)) loops through the array of all definitions of the word (if there is more that 1)
export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<ul>
							<li>
								<p>{definition.definition}</p>
								<p>
									<em>{definition.example}</em>
								</p>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
}
