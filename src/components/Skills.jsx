import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="alt" id="skills">
      <div className="wrap">
        <h2>Tech stack</h2>
        <p className="sub">What I use every day to build and test software.</p>
        <div className="stack">
          {skills.map((g) => (
            <div className="row" key={g.title}>
              <h3>{g.title}<small>{g.note}</small></h3>
              <div className="chips">{g.items.map((i) => <span className="tag" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
