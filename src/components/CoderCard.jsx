function CoderCard({ coder }) {
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

export default CoderCard
