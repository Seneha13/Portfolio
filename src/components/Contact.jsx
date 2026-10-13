import { profile } from '../data.js'
import Skyline from './Skyline.jsx'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>Hiring in Dubai? Let's talk.</h2>
        <p className="sub">I'm open to SDET and quality engineering roles across the UAE, and I'm ready to relocate.</p>
        <div className="btns">
          <a className="btn w" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn o" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn o" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="info">{profile.phone} | {profile.location}</p>
      </div>
      <Skyline />
    </section>
  )
}
