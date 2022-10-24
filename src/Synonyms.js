import React from "react";

export default function Synonyms(props) {
	if (props.synonyms.length) {
		return (
			<div className="Synonyms">
				<span>Synonyms:</span>
				<ul>
					{props.synonyms.map(function (synonym, index) {
						return <li key={index}>{synonym}</li>;
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}
