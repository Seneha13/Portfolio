import { profile } from '../data.js'

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">{profile.name}</a>
        <ul>
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
