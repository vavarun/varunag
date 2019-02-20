import styled from 'styled-components'

import media from '../utils/media'
import { ThemeContext } from '../pages/_app'

import RevealingText from '../components/RevealingText/index'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.large`margin-right: 100px;`}
`
const Title = styled.h1`
  font-family: Playfair Display;
  font-weight: bold;
  margin: 0px;
  font-size: 36px;
  text-transform: uppercase;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`
const Skill = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 16px;
  align-items: center;
  margin-bottom: 30px;
`

const Img = styled.img`
  object-fit: cover;
  height: 50px;
  margin-right: 45px;
`

function Skills() {
  return (
    <ThemeContext.Consumer>
      {({ value }) => (
        <Header>
          <RevealingText color={'#fff'}>
            <Title>Skills</Title>
          </RevealingText>
          <Column>
            <Skill>
              <Img src="/static/react-icon.svg" />
              React
            </Skill>
            <Skill>
              <Img src="/static/nodejs-icon.svg" />
              Nodejs
            </Skill>
            <Skill>
              <Img src="/static/javascript-icon.svg" />
              Javascript
            </Skill>
            <Skill>
              <Img src="/static/mongodb-icon.svg" />
              MongoDB
            </Skill>
            <Skill>
              <Img src="/static/elasticsearch-icon.svg" />
              ElasticSearch
            </Skill>
            <Skill>
              <Img src="/static/graphql-icon.svg" />
              GraphQL
            </Skill>
            <Skill>
              <Img
                style={{ marginRight: '20px' }}
                src={
                  value
                    ? '/static/nextjs-icon-sun.svg'
                    : '/static/nextjs-icon-moon.svg'
                }
              />
              Next.js
            </Skill>
          </Column>
        </Header>
      )}
    </ThemeContext.Consumer>
  )
}

export default Skills
