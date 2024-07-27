import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>,
)
