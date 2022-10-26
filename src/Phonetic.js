import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
	var myAudio = new Audio(props.phonetic.audio);
	function playAudio() {
		myAudio.play();
	}

	if (props.phonetic.audio) {
		return (
			<div className="Phonetic">
				<button onClick={playAudio} type="button">
					<i class="fa-solid fa-volume-low"></i>
				</button>
				<span>{props.phonetic.text}</span>
			</div>
		);
	} else {
		return <div>{props.phonetic.text}</div>;
	}
}
