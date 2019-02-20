import Head from 'next/head'
import styled from 'styled-components'

import { ThemeContext } from '../pages/_app'
import media from '../utils/media'

import Header from '../containers/Header'
import Navbar from '../containers/Navbar'
import ScrollBar from '../containers/ScrollBar'

import Skills from '../containers/Skills'
import AboutMe from '../containers/AboutMe'
import Experience from '../containers/Experience'
import Projects from '../containers/Projects'
import Education from '../containers/Education'
import Contact from '../containers/Contact'

const Container = styled.div`
  ${media.small`margin: 0px 20px;`}
  ${media.medium`margin: 0px 50px;`}
  ${media.large`margin: 0px 120px;`}
`

const Profile = styled.div`
  max-width: '650px',
  display: 'flex',
  flex-direction: 'column',
    margin-right: '100px',
  ${media.small`margin-right: 20px;`}
  ${media.medium`margin-right: 75px;`}
  ${media.large`margin-right: 100px;`}
`
export default function App() {
  const refs = {
    aboutme: React.createRef(),
    experience: React.createRef(),
    projects: React.createRef(),
    education: React.createRef(),
    contact: React.createRef(),
  }

  const scrollSectionIntoView = section => {
    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({
        behavior: 'smooth',
        block: section !== 'contact' ? 'start' : 'end',
      })
    }
  }

  return (
    <ThemeContext.Consumer>
      {({ screen }) => {
        return (
          <Container>
            <Head>
              <title>Varun A.</title>
            </Head>
            <Navbar onScrollIntoView={scrollSectionIntoView} />
            <Header onScrollIntoView={scrollSectionIntoView} />
            <div
              style={{
                paddingBottom: '28px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Profile>
                <AboutMe ref={refs.aboutme} />
                <Experience ref={refs.experience} />
                <Projects ref={refs.projects}/>
                <Education ref={refs.education}/>
              </Profile>
              {screen !== 'small' && <Skills />}
              {screen === 'large' ? <ScrollBar /> : undefined}
            </div>
            <Contact ref={refs.contact} />

          </Container>
        )
      }}
    </ThemeContext.Consumer>
  )
}
