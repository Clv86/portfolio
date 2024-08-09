import '../style/skillGrid.css'

function SkillGrid() {
  return (
    <div className="aboutGrid">
      <div className="card languages">
        <h3>Languages principaux</h3>
        <ul>
          <li>Javascript/Typescript</li>
          <li>PHP</li>
          <li>Java</li>
        </ul>
      </div>
      <div className="card frontend">
        <h3>Frontend</h3>
        <ul>
          <li>React</li>
          <li>Styled Component</li>
          <li>CMS : Wordpress, Wix</li>
        </ul>
      </div>
      <div className="card backend">
        <h3>Backend</h3>
        <ul>
          <li>Node.js, Express.js</li>
          <li>MongoDB, MySQL</li>
          <li>Symfony</li>
        </ul>
      </div>
      <div className="card infrastructure">
        <h3>Déploiement, tests</h3>
        <ul>
          <li>Versioning avec Git</li>
          <li>Jest, React-test-library</li>
          <li>Apache, Nginx, Vercel</li>
        </ul>
      </div>
    </div>
  )
}

export default SkillGrid
