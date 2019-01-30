import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
const Title = styled.h1`
  font-family: Playfair Display;
  margin: 0px;
  font-size: 36px;
  text-transform: uppercase;
`

const Span = styled.span`
  font-family: Roboto Condensed;
  font-weight: 300;
  line-height: 23px;
  font-size: 16px;
  font-style: normal;
`

function AboutMe() {
  return (
    <Header>
      <RevealingText color={'#fff'}>
        <Title>About Me</Title>
      </RevealingText>
      <Span>
        I am a multidisciplinary engineer specialized in JavaScript, React,
        Nodejs, client- server architecture, algorithms, and data modelling.
        Strong problem solver with a passion for making things and
        entrepreneurial ventures. I have worked across multiple countries,
        developing good client management, communication and organizational
        skills along the way. My progressive engineering experience has allowed
        me to work in business development, web technology, engineering
        modelling and real-estate development.
      </Span>
    </Header>
  )
}

export default AboutMe
