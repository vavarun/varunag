import styled from 'styled-components'

import media from '../utils/media'
import Section from './Section'
import RevealingText from './RevealingText/index'

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.small`flex-direction: column-reverse;`};
`

const Text = styled.div`
  font-family: Circular, sans-serif;
  color: #fff;
  font-size: 50px;
  font-weight: 700;
`

const Profile = React.forwardRef((props, ref) => (
  <Section name="profile" ref={ref} styles={{ backgroundColor: '#111' }}>
    <Article>
      <RevealingText color="#fff" duration={3}>
        <Text>I'm Varun,</Text>
      </RevealingText>
      <Text>I'm Varun,</Text>
    </Article>
  </Section>
))

export default Profile
