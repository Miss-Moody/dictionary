import React from "react";

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
				<br />
				{props.phonetic.text}
			</div>
		);
	} else {
		return <div>{props.phonetic.text}</div>;
	}
}
