import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <h2>Education</h2>
        <p className="sub">Computer science degree, plus hands-on Java and web training.</p>
        <div className="two">
          {education.map((e) => (
            <div className="card" key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.lines.map((l, i) => <span key={l}>{l}{i < e.lines.length - 1 && <br />}</span>)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
