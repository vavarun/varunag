import PropTypes from 'prop-types'

import { Block, Element, Span } from './RevealingText'

function BlockRevealAnimation({ delay, duration, children, color }) {
  return (
    <Span>
      <Element
        style={{
          animationDelay: `${delay + duration / 2}s`,
        }}
      >
        {children}
      </Element>
      <Block
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          backgroundColor: color,
        }}
      />
    </Span>
  )
}

BlockRevealAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
}

BlockRevealAnimation.defaultProps = {
  delay: 1,
  duration: 0.9,
  color: '#000',
}

export default BlockRevealAnimation
