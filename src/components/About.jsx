import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2>About me</h2>
        <p className="sub">A quality engineer who also writes code.</p>
        <div className="about">
          <div>
            <p>
              I test and build software at {profile.company}, on an enterprise ITSM platform and a mobile app.
              I like making workflows reliable, traceable and easy to audit.
            </p>
            <p>
              I'm looking for my next role in Dubai and the wider UAE, and I'm ready to relocate from Chennai.
            </p>
            <div className="facts">
              <div className="fact"><b>1 yr</b><span>SDET experience</span></div>
              <div className="fact"><b>8.8</b><span>CGPA, B.E. CSE</span></div>
              <div className="fact"><b>2</b><span>Products worked on</span></div>
            </div>
          </div>
          <div className="code" aria-label="Profile summary shown as code">
            <div className="bar"><i /><i /><i /><span>seneha.profile.json</span></div>
            <pre>{`{
  `}<span className="k">"role"</span>{`: `}<span className="v">"SDET"</span>{`,
  `}<span className="k">"company"</span>{`: `}<span className="v">"{profile.company}"</span>{`,
  `}<span className="k">"experience"</span>{`: `}<span className="v">"{profile.experience}"</span>{`,
  `}<span className="k">"stack"</span>{`: [`}{profile.stack.map((s, i) => <span key={s}><span className="v">"{s}"</span>{i < profile.stack.length - 1 ? ', ' : ''}</span>)}{`],
  `}<span className="k">"based_in"</span>{`: `}<span className="v">"{profile.location}"</span>{`,
  `}<span className="k">"relocate_to"</span>{`: `}<span className="v">"{profile.relocate}"</span>{`
}
`}<span className="ok">PASS</span>{`  ready for the next team`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
