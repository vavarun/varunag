import Head from 'next/head'

import Profile from '../components/Profile'

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
      <Profile ref={refs.profile} />
    </>
  )
}
