import PropTypes from 'prop-types'
import { Span, Element, Block } from './RevealingText'

const BlockRevealAnimation = React.forwardRef(
  ({ delay, duration, children, color }, ref) => (
    <Span ref={ref}>
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
)

BlockRevealAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  styles: PropTypes.object,
}

BlockRevealAnimation.defaultProps = {
  className: '',
  delay: 1,
  duration: 0.9,
  color: '#000',
}

export default BlockRevealAnimation
