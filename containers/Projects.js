import styled from 'styled-components'

import RevealingText from '../components/RevealingText/index'
import Section from '../components/Section'

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
const ProjectTitle = styled.span`
  font-family: Roboto Condensed;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 25px;
`

const Year = styled.span`
  font-family: Roboto Condensed;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  font-size: 20px;
  text-transform: uppercase;
`

const ProjectDescription = styled.span`
  font-family: Roboto Condensed;
  font-weight: 300;
  line-height: 23px;
  font-size: 16px;
  font-style: normal;
  margin-top: 20px;
`

const StackHeading = styled.span`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  line-height: 23px;
  font-size: 16px;
  margin-top: 20px;
`

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`

const StackImg = styled.img`
  object-fit: cover;
  height: 50px;
  margin-right: 15px;
`

const Projects = React.forwardRef((props, ref) => (
  <Section name="aboutme" ref={ref}>
    <Header>
      <RevealingText color={'#fff'}>
        <Title>Projects</Title>
      </RevealingText>
      <ProjectTitle>SPOT-A-MOVIE</ProjectTitle>
      <Year style={{ color: '#c4c4c4' }}>2017</Year>
      <ProjectDescription>
        A movie recommendation engine which grabs your Spotify music listening
        habits and movie preferences to provide you with great movie finds instantly for
        your evening. It is currently deployed as a beta app on the
        Apple TestFlight using React-Native.
      </ProjectDescription>
      <StackHeading>Stack</StackHeading>
      <Stack>
        <StackImg title="React" src="/static/react-icon.svg" />
        <StackImg title="Redux" src="/static/redux-icon.svg" />
        <StackImg title="MongoDB" src="/static/mongodb-icon.svg" />
        <StackImg title="NodeJS" src="/static/nodejs-icon.svg" />
        <StackImg title="Redis" src="/static/redis-icon.svg" />
        <StackImg
          title="Jest"
          style={{ height: '45px' }}
          src="/static/jest-icon.svg"
        />
      </Stack>
      <ProjectTitle>BLOK</ProjectTitle>
      <Year style={{ color: '#c4c4c4' }}>2017</Year>
      <ProjectDescription>
        Blok is a real time collaboration, flexible writing web app for crafting
        notes with Markdown in a distraction free environment. Users can add
        multiple collaborators on each note with live editing.
      </ProjectDescription>
      <StackHeading>Stack</StackHeading>
      <Stack>
        <StackImg title="Redis" src="/static/redis-icon.svg" />
        <StackImg title="Meteor" src="/static/meteor-icon.svg" />
        <StackImg title="MongoDB" src="/static/mongodb-icon.svg" />
        <StackImg title="NodeJS" src="/static/nodejs-icon.svg" />
      </Stack>
      <ProjectTitle>Duet</ProjectTitle>
      <Year style={{ color: '#c4c4c4' }}>2017</Year>
      <ProjectDescription>
        Duet is a video dating iOS app which connects users via a video call with
        Websockets and Redis. It was an innovative approach to the classic dating apps
        by allowing users to have conversations on demand.
      </ProjectDescription>
      <StackHeading>Stack</StackHeading>
      <Stack>
        <StackImg title="React" src="/static/react-icon.svg" />
        <StackImg title="Redis" src="/static/redis-icon.svg" />
        <StackImg
          title="Websocket"
          style={{ height: '40px' }}
          src="/static/websocket-icon.svg"
        />
        <StackImg title="Postgres" src="/static/postgres-icon.svg" />
        <StackImg title="NodeJS" src="/static/nodejs-icon.svg" />
      </Stack>
    </Header>
    </Section>
))

export default Projects
