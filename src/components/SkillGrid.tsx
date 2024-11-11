import '../style/skillGrid.css'

function SkillGrid() {
  return (
    <div className="aboutGrid">
      <div className="card languages">
        <h3>Languages principaux</h3>
        <ul>
          <li>Javascript/Typescript</li>
          <li>PHP, Elixir</li>
        </ul>
      </div>
      <div className="card frontend">
        <h3>Frontend</h3>
        <ul>
          <li>React, Vue</li>
          <li>Styled Component</li>
          <li>CMS : Wordpress</li>
        </ul>
      </div>
      <div className="card backend">
        <h3>Backend</h3>
        <ul>
          <li>Express.js, Nest.js</li>
          <li>MongoDB, MySQL, PostgreSQL</li>
          <li>Phoenix</li>
        </ul>
      </div>
      <div className="card infrastructure">
        <h3>Déploiement, tests</h3>
        <ul>
          <li>Git, Gitlab CI/CD, Docker</li>
          <li>Jest, React-test-library</li>
          <li>Apache, Nginx, Vercel</li>
        </ul>
      </div>
    </div>
  )
}

export default SkillGrid
