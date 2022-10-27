import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	// whenever we get responce from the dictionary API, we set the value of the results variable to response.data[0]
	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	// whenever we get responce from the picture API (Pexel), we set the value of the photos variable to response.data.photos
	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	// the function makes an API call to https://dictionaryapi.dev and tp the picture API (pexels)
	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelsApiKey =
			"563492ad6f917000010000017a336706e8a2496a949b9c92c6d22c7d";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		axios
			.get(pexelsApiUrl, {
				headers: { Authorization: `Bearer ${pexelsApiKey}` },
			})
			.then(handlePexelsResponse);
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
					<h4>What word do you want to look up?</h4>
					<form onSubmit={handleSubmit} className="container">
						<div className="row">
							<div className="col-9 column-1">
								<input
									className="form-control me-2 keyword-searchfield"
									type="search"
									placeholder="Type or copy text"
									aria-label="Search"
									autoComplete="off"
									defaultValue={props.defaultKeyword}
									autoFocus={true}
									onChange={handleKeywordChange}
								/>
							</div>
							<div className="col-3 column-2">
								<button className="keyword-search-button" type="submit">
									<i className="fa-solid fa-magnifying-glass search-icon"></i>
								</button>
							</div>
						</div>
					</form>
				</section>
				<Results results={results} />
				<Photos photos={photos} />
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
