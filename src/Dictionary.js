import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
	}
	// whenever a user submits the search form the function makes an API call to https://dictionaryapi.dev
	function search(event) {
		event.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	// whenever a symbol is being typed in the searchfield this function uses state to update the keyword
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	// everytime the state changes the Results component is rerendered
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
			<Results results={results} />
		</div>
	);
}
