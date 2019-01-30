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

function Contact() {
  return (
    <Header>
      <RevealingText color={'#fff'}>
        <Title>Contact</Title>
      </RevealingText>
    </Header>
  )
}

export default Contact
