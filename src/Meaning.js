import React from "react";
import Subsynonyms from "./Subsynonyms";
import Synonyms from "./Synonyms";
import "./Meaning.css";

//  props.meaning.definitions.map(function(definition, index)) loops through the array of all definitions of the word (if there is more that 1)
export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3>
				<em>{props.meaning.partOfSpeech}</em>
			</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<ul>
							<li>
								<div className="definition">{definition.definition}</div>
								<div className="example">
									<em>{definition.example}</em>
								</div>

								<Subsynonyms subsynonyms={definition.synonyms} />
							</li>
						</ul>
					</div>
				);
			})}
			<Synonyms synonyms={props.meaning.synonyms} />
		</div>
	);
}
