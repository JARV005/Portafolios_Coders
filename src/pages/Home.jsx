"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import CoderCard from "../components/CoderCard"
import { coders } from "../data/coders"

function Home() {
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

export default Home
