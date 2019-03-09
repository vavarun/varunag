import styled from 'styled-components'

import { useWindowScrollPosition, useWindowSize } from '../hooks'
import media from '../utils/media'

const Bar = styled.div`
  position: fixed;
  top: ${props => `${props.top}px;`}
  height: 460px;
  width: 10px;
  background: #c4c4c4;
  border-radius: 5px;
  z-index: 99;
  ${media.large`right: 120px;`}
`
const Scroll = styled.div`
  height: 100px;
  width: 10px;
  background: #92ddc8;
  border-radius: 5px;
  margin-top: ${props =>
    props.scroll >= 0 ? `${props.scroll * 360}px` : '0px'};
`

function ScrollBar() {
  const { innerHeight, scrollHeight } = useWindowSize()
  const { y: scrollY } = useWindowScrollPosition()
  const scrollPosition =
    (scrollY - innerHeight) / (scrollHeight - innerHeight - innerHeight)
  let topPosition
  if (scrollY >= 0 && scrollY <= innerHeight - (innerHeight - 460) / 2) {
    topPosition = innerHeight - scrollY
  } else if (scrollY >= innerHeight - (innerHeight - 460) / 2) {
    topPosition = (innerHeight - 460) / 2
  }
  return (
    <Bar top={topPosition}>
      <Scroll scroll={scrollPosition} />
    </Bar>
  )
}

export default ScrollBar
