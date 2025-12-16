"use client"

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search developers by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search developers"
      />
    </div>
  )
}

export default SearchBar
