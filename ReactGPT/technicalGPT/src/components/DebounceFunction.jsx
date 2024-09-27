import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce.js"; 
//Implement a useDebounce hook in React. This hook should delay updating a value until after a certain period of inactivity. 
//Use it to debounce a search input that fetches data from an API only when the user has stopped typing for at least 500ms.
const searchGitHubRepos = async (query) => {
  const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
  const data = await response.json();
  return data.items;
};

const SearchResults = ({ results }) => (
  <ul>
    {results.map((result) => (
      <li key={result.id}>
        <a href={result.html_url} target="_blank" rel="noopener noreferrer">
          {result.name}
        </a>
      </li>
    ))}
  </ul>
);

export default function DebounceFunction() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchTerm(formData.get("search"));
    e.target.reset();
    e.target.focus();
  };

  useEffect(() => {
    const searchGitHub = async () => {
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const data = await searchGitHubRepos(debouncedSearchTerm);
        setResults(data || []);
      } else {
        setResults([]);
      }
      setIsSearching(false);
    };

    searchGitHub();
  }, [debouncedSearchTerm]);

  return (
    <section>
      <header>
        <h1>useDebounce</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            placeholder="Search GitHub Repos"
            style={{ background: "var(--charcoal)" }}
            onChange={handleChange}
            value={searchTerm}
          />
          <button className="primary" disabled={isSearching} type="submit">
            {isSearching ? "..." : "Search"}
          </button>
        </form>
      </header>
      <SearchResults results={results} />
    </section>
  );
}