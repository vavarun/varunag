import styled from 'styled-components'

import Section from '../components/Section'
import RevealingText from '../components/RevealingText/index'
import { ThemeContext } from '../pages/_app'

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
  margin-bottom: 20px;
  font-weight: 700;
`

const Job = styled.span`
  font-family: Roboto Condensed;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-transform: uppercase;
`

const Year = styled.span`
  font-family: Roboto Condensed;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  font-size: 20px;
  text-transform: uppercase;
`
const Span = styled.span`
  font-family: Roboto Condensed;
  font-weight: 300;
  line-height: 23px;
  font-size: 16px;
  font-style: normal;
  margin-top: 15px;
`

const StackHeading = styled.span`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  line-height: 23px;
  font-size: 16px;
  margin-top: 25px;
`

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  flex-wrap: wrap;
`

const StackImg = styled.img`
  object-fit: cover;
  height: 50px;
  margin-right: 15px;
`

const CivilHeading = styled.span`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 50px;
`

const CivilJob = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`

const JobTitle = styled.li`
  font-family: Roboto Condensed;
  font-style: italic;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-transform: uppercase;
  color: #a3a3a3;
`

const JobDescription = styled.span`
  font-family: Roboto Condensed;
  font-weight: 300;
  line-height: 20px;
  font-size: 14px;
  padding: 10px;
  left: -14px;
  position: relative;
`

const Experience = React.forwardRef((props, ref) => (
  <Section name="experience" ref={ref}>
    <ThemeContext.Consumer>
      {({ value }) => (
        <Header>
          <RevealingText color={'#fff'}>
            <Title>Experience</Title>
          </RevealingText>
          <Job>BOOKUP.io , CO-FOUNDER & FULL STACK DEVELOPER</Job>
          <Year>MARCH 2018 - PRESENT</Year>
          <Span>
            BookUp.io is an online platform for SMEs to manage their customers
            effectively and efficiently. The platform provides an automated solution and instant
            deployment of CMS, CRM, Digital Payments, Bookings, SEO, Analytics,
            Calendar, Notifications, and Website Builder.
          </Span>
          <Span>
            My role was an end to end Software Developer which also included
            Business Analyst tasks and Software Architecture.{' '}
          </Span>
          <StackHeading>Stack</StackHeading>
          <Stack>
            <StackImg title="React" src="/static/react-icon.svg" />
            <StackImg title="NodeJS" src="/static/nodejs-icon.svg" />
            <StackImg title="Javascript" src="/static/javascript-icon.svg" />
            <StackImg
              title="Elasticsearch"
              src="/static/elasticsearch-icon.svg"
            />
            <StackImg title="MongoDB" src="/static/mongodb-icon.svg" />
            <StackImg title="GraphQL" src="/static/graphql-icon.svg" />
            <StackImg
              title="NextJS"
              src={
                value
                  ? '/static/nextjs-icon-sun.svg'
                  : '/static/nextjs-icon-moon.svg'
              }
            />
          </Stack>
          <CivilHeading>
            VARIOUS , CIVIL ENGINEERING & PROJECT MANAGEMENT
          </CivilHeading>
          <Year style={{ color: '#c4c4c4' }}>AUGUST 2009 - JUNE 2016</Year>
          <CivilJob>
            <JobTitle>
              Estia Health, Melbourne - Development Administrator
            </JobTitle>
            <JobDescription>
              Project management of medical facilities, Business Cases,
              Procurement, Contact Administration, Stakeholder Management,
              Quality Assurance
            </JobDescription>
            <JobTitle>
              Transvalue Management, Melbourne – Engineering Analyst
            </JobTitle>
            <JobDescription>
              Planning and Feasibility Assessment Reports for government
              transport projects
            </JobDescription>
            <JobTitle>
              United Engineers, Singapore – Environmental Engineer
            </JobTitle>
            <JobDescription>
              Project Management, Structural Drawings and Force Analysis
            </JobDescription>
            <JobTitle>
              Meinhardt Infrastructure, Singapore – Structural Engineer Intern
            </JobTitle>
            <JobDescription>
              Structural Analysis and Finite Element Analysis on underground
              rail stations
            </JobDescription>
            <JobTitle>
              WS Atkins & Oversees, Bahrain – Engineering Intern
            </JobTitle>
            <JobDescription>
              Method Statements for contractors, Structural Drawings
            </JobDescription>
          </CivilJob>
        </Header>
      )}
    </ThemeContext.Consumer>
  </Section>
))

export default Experience
