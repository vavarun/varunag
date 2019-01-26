import Head from 'next/head'

import Profile from '../containers/Profile'
import Navbar from '../containers/Navbar'
import AboutMe from '../containers/AboutMe'

export default function App() {
  const refs = {
    profile: React.createRef(),
    aboutMe: React.createRef(),
  }

  return (
    <>
      <Head>
        <title>Varun A.</title>
      </Head>
      <Navbar />
      <Profile ref={refs.profile} />
      <AboutMe ref={refs.aboutMe} />
    </>
  )
}
