import React from "react";
import "./Subsynonyms.css";

export default function Subsynonyms(props) {
	if (props.subsynonyms.length) {
		return (
			<ul className="Subsynonyms">
				<span className="Subsynonyms-title">Synonyms:</span>
				{props.subsynonyms.map(function (subsynonym, index) {
					return <li key={index}>{subsynonym}</li>;
				})}
			</ul>
		);
	} else {
		return null;
	}
}
