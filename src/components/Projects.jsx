import { projects, profile } from '../data.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="sub">Work projects and the ones I built on my own. More code is on my GitHub.</p>
        <div className="grid">
          {projects.map((p) => (
            <div className={`card${p.big ? ' big' : ''}`} key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <a className="btn s" href={profile.github} target="_blank" rel="noopener noreferrer">See more on GitHub</a>
        </p>
      </div>
    </section>
  )
}
