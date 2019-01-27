import styled from 'styled-components'

import media from '../utils/media'
import Section from '../components/Section'
import RevealingText from '../components/RevealingText/index'

const Article = styled.article`
  display: flex;
  justify-content: center;
  padding: 40px;
  flex-direction: column;
`
const Text = styled.div`
  font-family: Raleway, sans-serif;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
`

const Bio = styled.span`
  font-family: Raleway, sans-serif;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
`

const Profile = React.forwardRef((props, ref) => (
  <Section name="profile" ref={ref}>
    <Article>
      <RevealingText color="#fff" duration={3}>
        <Text>Get to</Text>
      </RevealingText>
      <RevealingText color="#fff" duration={3}>
        <Text>know me</Text>
      </RevealingText>
      <Bio>
        My name is Varun Agarwal, I am 29 years old and a self taught developer
        (Civil Engineering by degree) working at Bookup.io in Barcelona, Spain.
        I specialise in JavaScript, React, Nodejs, client-server architecture,
        algorithms, and data modelling.
      </Bio>
      <Bio>
        Strong problem solver with a passion for making things and
        entrepreneurial ventures. My profession is my strongest passion, and I
        spend a lot of time trying out technologies and optimising my work.
      </Bio>
      <Bio>
        I have worked across multiple countries, developing good client
        management, communication and organizational skills along the way. My
        progressive engineering experience has allowed me to work in business
        development, web technology and engineering modelling.
      </Bio>
    </Article>
  </Section>
))

export default Profile
