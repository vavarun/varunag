import PropTypes from 'prop-types'
import TrackVisibility from 'react-on-screen'
import styled from 'styled-components'

import media from '../utils/media'
import { ThemeContext } from '../pages/_app'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  transition: opacity 1.5s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  height: 100vh;
  width: 100vw;
`

const Section = React.forwardRef(({ children, styles }, ref) => (
  <TrackVisibility once partialVisibility>
    {({ isVisible }) => (
      <Wrapper ref={ref} isVisible={isVisible} style={{ ...styles }}>
        {children}
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
