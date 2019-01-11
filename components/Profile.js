import styled from 'styled-components'

import media from '../utils/media'
import Section from './Section'
import RevealingText from './RevealingText/index'

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
const Text2 = styled.div`
  font-family: Raleway, sans-serif;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
`

const Profile = React.forwardRef((props, ref) => (
  <Section name="profile" ref={ref} styles={{ backgroundColor: '#111' }}>
    <Article>
      <RevealingText color="#fff" duration={3}>
        <Text>Hey, I&apos;m Varun,</Text>
      </RevealingText>
      <RevealingText color="#fff" duration={3}>
        <Text2>
          Software developer + Entrepreneur with a multi-disciplinary
          engineering background.
        </Text2>
      </RevealingText>
    </Article>
  </Section>
))

export default Profile
