"use client"

import { useState } from "react"
import { coders } from "../src/data/coders"
import "../src/styles/main.css"

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Developer Portfolio Directory</h1>
        <p className="header-subtitle">Discover talented developers and their work</p>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Developer Portfolio Directory. Built with React & Next.js.
        </p>
      </div>
    </footer>
  )
}

function SearchBar({ searchTerm, onSearchChange }: { searchTerm: string; onSearchChange: (value: string) => void }) {
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

interface Coder {
  id: number
  name: string
  cohort: string
  technologies: string[]
  portfolioUrl: string
}

function CoderCard({ coder }: { coder: Coder }) {
  return (
    <article className="coder-card">
      <div className="coder-card-content">
        <h2 className="coder-name">{coder.name}</h2>
        <p className="coder-cohort">{coder.cohort}</p>
      </div>

      <a href={coder.portfolioUrl} target="_blank" rel="noopener noreferrer" className="portfolio-link">
        View Portfolio
        <span className="arrow">→</span>
      </a>
    </article>
  )
}

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCoders = coders.filter((coder) => coder.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="container">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {filteredCoders.length > 0 ? (
            <div className="coder-grid">
              {filteredCoders.map((coder) => (
                <CoderCard key={coder.id} coder={coder} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No developers found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
