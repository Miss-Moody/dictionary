import React from "react";

export default function Phonetic(props) {
	var myAudio = new Audio(props.phonetic.audio);
	function playAudio() {
		myAudio.play();
	}

	if (props.phonetic.audio) {
		return (
			<div className="Phonetic">
				<a href={props.phonetic.audio} target="_blank" rel="noreferrer">
					Listen
				</a>
				<button onClick={playAudio} type="button">
					Play Audio
				</button>
				<br />
				{props.phonetic.text}
			</div>
		);
	} else {
		return <div>{props.phonetic.text}</div>;
	}
}
