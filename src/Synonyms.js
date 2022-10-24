import React from "react";

export default function Synonyms(props) {
	if (props.synonyms.length) {
		return (
			<div className="Synonyms">
				<span>Synonyms:</span>
				{props.synonyms.map(function (synonym, index) {
					return (
						<div className="Synonyms">
							<ul>
								<li key={index}>{synonym}</li>
							</ul>
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
