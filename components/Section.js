import PropTypes from 'prop-types'
import TrackVisibility from 'react-on-screen'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  transition: opacity 1.5s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`

const Section = React.forwardRef(({ children, name }, ref) => (
  <TrackVisibility once partialVisibility>
    {({ isVisible }) => (
      <Wrapper ref={ref} isVisible={isVisible}>
        {children}
      </Wrapper>
    )}
  </TrackVisibility>
))

Section.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
}

export default Section