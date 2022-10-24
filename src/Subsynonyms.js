import React from "react";

export default function Subsynonyms(props) {
	if (props.subsynonyms.length) {
		return (
			<ul className="Subsynonyms">
				{props.subsynonyms.map(function (subsynonym, index) {
					return <li key={index}>{subsynonym}</li>;
				})}
			</ul>
		);
	} else {
		return null;
	}
}
