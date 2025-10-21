import React, { useState, useEffect, useCallback } from "react";
import { SEARCH } from "../../graphql/Search";
import { fetchGraphQL } from "../../services/wp-data";
import { useDebounce } from "../../hooks/useDebounce";

interface Suggestion {
  id: string;
  title: string;
  uri: string;
}

export default function SearchSuggestionBox() {
  const [search, setSearch] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const debouncedSearch = useDebounce(search, 300);

  const fetchSuggestions = useCallback(async (searchTerm: string) => {
    if (searchTerm.length <= 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const graphqlQuery = SEARCH(searchTerm, 5);
    const data = await fetchGraphQL(graphqlQuery);
    const results = data?.posts?.nodes || [];
    setSuggestions(results);
    setShowSuggestions(results.length > 0);
  }, []);

  useEffect(() => {
    let active = true;
    if (search.length > 1) {
      fetchSuggestions(search);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }

    return () => {
      active = false;
    };
  }, [debouncedSearch, fetchSuggestions]);

  function handleSelect(uri: string) {
    if (/^\/(?!\/|\\\\)[\w\-\/]*$/.test(uri)) {
      window.location.href = uri;
    }
  }

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <input
        type="text"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="Search..."
        aria-label="Search posts"
        style={{ width: "100%", padding: "8px" }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "white",
            border: "1px solid #ccc",
            zIndex: 10,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {suggestions.map((s: Suggestion) => (
            <li
              key={s.id}
              style={{ padding: "8px", cursor: "pointer" }}
              onClick={() => handleSelect(s.uri)}
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
