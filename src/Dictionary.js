import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);

	function search(event) {
		event.preventDefault();
		alert(`Searching ${keyword}`);
	}

	// whenever a symbol is being typed in the searchfield this function uses state to update the keyword
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					className="form-control me-2 keyword-searchfield"
					type="search"
					placeholder="Type or copy text"
					aria-label="Search"
					autoComplete="off"
					autoFocus={true}
					onChange={handleKeywordChange}
				/>
				<button
					className="btn search-button keyword-search-button"
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
}
