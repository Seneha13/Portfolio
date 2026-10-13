import { useState } from 'react'
import { profile } from '../data.js'
import Skyline from './Skyline.jsx'
import DubaiClock from './DubaiClock.jsx'

export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false)
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <div className="pill"><span className="dot" />Open to relocate to {profile.relocate}</div>
          <h1>Hi, I'm Seneha. I build quality into software </h1>
          <p className="lead">
            Software Development Engineer in Test with {profile.experience} of experience in Java, test automation,
            React and TypeScript. Based in Chennai and ready to join a product team in the UAE.
          </p>
          <div className="btns">
            <a className="btn p" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn s" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn s" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="photo-col">
          <div className="arch">
            {noPhoto
              ? <div className="mono">SS</div>
              : <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Portrait of Seneha S" onError={() => setNoPhoto(true)} />}
          </div>
          {/* <div className="chip a">Dubai time<small><DubaiClock /></small></div>
          <div className="chip b">SDET<small>{profile.experience} experience</small></div> */}
        </div>
      </div>
      <Skyline />
    </header>
  )
}
