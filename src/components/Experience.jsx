import { experience } from '../data.js'

const List = ({ points }) => (
  <ul>{points.map((p) => <li key={p}>{p}</li>)}</ul>
)

export default function Experience() {
  return (
    <section className="alt" id="experience">
      <div className="wrap">
        <h2>Experience</h2>
        <p className="sub">Where I work today, and the internships that got me here.</p>
        <div className="tl">
          {experience.map((job) => (
            <div className="job" key={job.title}>
              <h3>{job.title}</h3>
              <div className="m">{job.meta}</div>
              {job.groups
                ? job.groups.map((g) => (
                    <div key={g.name}>
                      <div className="sec">{g.name}</div>
                      <List points={g.points} />
                    </div>
                  ))
                : <List points={job.points} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
