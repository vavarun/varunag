import Head from 'next/head'

import Header from '../containers/Header'
import Navbar from '../containers/Navbar'

export default function App() {
  const refs = {
    profile: React.createRef(),
    resume: React.createRef(),
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
      <Navbar onScrollIntoView={scrollSectionIntoView} />
      <Header />
    </>
  )
}
