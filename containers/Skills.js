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
  font-weight: bold;
  margin: 0px;
  font-size: 36px;
  text-transform: uppercase;
`

function Skills() {
  return (
    <Header>
      <RevealingText color={'#fff'}>
        <Title>Skills</Title>
      </RevealingText>
    </Header>
  )
}

export default Skills
