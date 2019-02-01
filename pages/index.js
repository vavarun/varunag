import Head from 'next/head'

import Header from '../containers/Header'
import Navbar from '../containers/Navbar'
import ScrollBar from '../containers/ScrollBar'

import Skills from '../containers/Skills'
import AboutMe from '../containers/AboutMe'
import Experience from '../containers/Experience'
import Projects from '../containers/Projects'
import Education from '../containers/Education'
import Contact from '../containers/Contact'

export default function App() {
  const refs = {
    profile: React.createRef(),
    aboutme: React.createRef(),
    experience: React.createRef(),
    contact: React.createRef(),
  }

  const scrollSectionIntoView = section => {
    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <>
      <Head>
        <title>Varun A.</title>
      </Head>
      <Navbar onScrollIntoView={scrollSectionIntoView}/>
      <Header onScrollIntoView={scrollSectionIntoView}/>
      <div
        style={{
          padding: '0px 120px 28px 120px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            maxWidth: '650px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <AboutMe ref={refs.aboutme}/>
          <Experience ref={refs.experience}/>
          <Projects />
          <Education />
          <Contact ref={refs.contact}/>
        </div>
        <Skills/>
        <ScrollBar />
      </div>
    </>
  )
}
