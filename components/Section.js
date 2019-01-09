import PropTypes from 'prop-types'
import TrackVisibility from 'react-on-screen'
import styled from 'styled-components'

import media from '../utils/media'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  transition: opacity 1.5s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  height: 100vh;
  width: 100vw;
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  ${media.large`padding: 20px 15px;`} ${media.small`padding: 15px 10px;`};
`
const H1 = styled.h1`
  margin: 0 0 15px 0;
  text-align: center;
  text-transform: capitalize;
  ${media.large`font-size: 45px;`} ${media.small`font-size: 35px;`};
`

const Section = React.forwardRef(({ children, name, styles }, ref) => (
  <TrackVisibility once partialVisibility>
    {({ isVisible }) => (
      <Wrapper ref={ref} isVisible={isVisible} style={{ ...styles }}>
        <Container>
          <H1>{name}</H1>
          {children}
        </Container>
      </Wrapper>
    )}
  </TrackVisibility>
))

Section.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  styles: PropTypes.object,
}

export default Section
