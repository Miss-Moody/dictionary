import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	// the function makes an API call to https://dictionaryapi.dev
	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	// whenever a user submits the search form the function calls the search() function
	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	// whenever a symbol is being typed in the searchfield this function uses state to update the keyword
	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	// changes the initial state of loaded from falses to true, calls the search function
	function load() {
		setLoaded(true);
		search();
	}

	// everytime the state changes the Results component is rerendered
	if (loaded) {
		return (
			<div className="Dictionary">
				<section className="search">
					<form onSubmit={handleSubmit}>
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
							<i class="fa-solid fa-magnifying-glass search-icon"></i>
						</button>
					</form>
				</section>
				<Results results={results} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
