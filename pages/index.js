import Head from 'next/head'

import Profile from '../components/Profile'
import Navbar from '../components/Navbar'


export default function App() {
  const refs = {
    profile: React.createRef(),
    resume: React.createRef(),
  }

  return (
    <>
      <Head>
        <title>Varun A.</title>
      </Head>
      <Navbar/>
      <Profile ref={refs.profile} />
    </>
  )
}
