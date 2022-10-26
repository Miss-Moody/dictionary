import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">
					Learn the meaning and phonetics of words
				</header>
				<main>
					<Dictionary defaultKeyword="kitten" />
				</main>
				<footer className="App-footer">
					<small>
						Coded by{" "}
						<a
							href="https://www.linkedin.com/in/olena-k-97ab18162/"
							target="_blank"
							rel="noreferrer"
						>
							Olena Kravchuk
						</a>
					</small>
				</footer>
			</div>
		</div>
	);
}

export default App;
