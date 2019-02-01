import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
`
const Title = styled.div`
  font-family: Playfair Display;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 700;
`
const EducationTitle = styled.span`
  font-family: Roboto Condensed;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 25px;
  font-style: normal;
`

const Program = styled.span`
  font-family: Roboto Condensed;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 10px;
`

const Year = styled.span`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  line-height: 23px;
  font-size: 16px;
  margin-top: 5px;

`

function Education() {
  return (
    <Header>
      <RevealingText color={'#fff'}>
        <Title>Education</Title>
      </RevealingText>
      <EducationTitle>
        Codeworks
      </EducationTitle>
      <Program>FULL STACK DEVELOPMENT PROGRAM</Program>
      <Year>
        Completed February 2017
      </Year>
      <EducationTitle>
        Imperial College London
      </EducationTitle>
      <Program>B.Eng Civil Engineering</Program>
      <Year>
        Completed February 2011
      </Year>

      <EducationTitle>
        University of Queensland
      </EducationTitle>
      <Program>Civil and Environmental Engineering</Program>
      <Year>
        Completed July 2013
      </Year>

      <EducationTitle>
        THE LONDON SCHOOL OF ECONOMICS
      </EducationTitle>
      <Program>CERTIFICATE  MANAGERIAL ACCOUNTING AND FINANCIAL CONTROL</Program>
      <Year>
        Completed August 2011
      </Year>

    </Header>
  )
}

export default Education
