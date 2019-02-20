import styled from 'styled-components'

import media from '../utils/media'
import { ThemeContext } from '../pages/_app'

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

function Experience() {
  return (
    <ThemeContext.Consumer>
      {({ scrollY, scrollPosition, headerHeight }) => {
        let topPosition
        if (
          scrollY >= 0 &&
          scrollY <= headerHeight - (headerHeight - 460) / 2
        ) {
          topPosition = headerHeight - scrollY
        } else if (scrollY >= headerHeight - (headerHeight - 460) / 2) {
          topPosition = (headerHeight - 460) / 2
        }
        return (
          <Bar top={topPosition}>
            <Scroll scroll={scrollPosition} />
          </Bar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Experience
