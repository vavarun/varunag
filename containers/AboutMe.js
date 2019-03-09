import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'
import Section from '../components/Section'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const Title = styled.div`
  font-family: Playfair Display;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
`

const Span = styled.span`
  font-family: Roboto Condensed;
  font-weight: 300;
  line-height: 23px;
  font-size: 16px;
  font-style: normal;
  margin-top: 15px;
`

const AboutMe = React.forwardRef((props, ref) => (
  <Section ref={ref}>
    <Header>
      <RevealingText color={'#fff'}>
        <Title>About Me</Title>
      </RevealingText>
      <Span>
        I am a multidisciplinary engineer specialized in JavaScript, React,
        Nodejs, client- server architecture, algorithms, and data modelling.
        Strong problem solver with a passion for making things and
        entrepreneurial ventures.
      </Span>
      <Span>
        I have worked across multiple countries, developing good client
        management, communication and organizational skills along the way. My
        progressive engineering experience has allowed me to work in business
        development, web technology, mathematical engineering modelling and land
        development.
      </Span>
    </Header>
  </Section>
))

export default AboutMe
