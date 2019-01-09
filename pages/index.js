import Profile from '../components/Profile'

export default function App() {
  const refs = {
    profile: React.createRef(),
    resume: React.createRef(),
  }

  return (
    <>
      <Profile ref={refs.profile} />
    </>
  )
}
