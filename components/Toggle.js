import styled from 'styled-components'
import { ThemeContext } from '../pages/_app'

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 38px;
`

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: 0.4s;

  cursor: pointer;
  background-color: #252323;
  border-radius: 38px;

  ${Checkbox}:checked + & {
    background-color: #92ddc8;
  }

  ${Checkbox}:focus + & {
    box-shadow: 0 0 1px #92ddc8;
  }

  &:before {
    position: absolute;
    content: '';
    left: 4px;
    bottom: 4px;

    transition: 0.4s;

    height: 30px;
    width: 30px;
    background-color: white;
    border-radius: 50%;

    ${Checkbox}:checked + & {
      transform: translateX(62px);
    }
  }
`

const Img = styled.img`
  position: absolute;
  height: 24px;
  width: 24px;
  bottom: 7px;
  left: ${props => (props.toggle ? '13px' : '63px')};
  cursor: pointer;
`

class Toggle extends React.PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ value, toggleTheme }) => (
          <Wrapper>
            <Checkbox onClick={toggleTheme} toggle={value} />
            <Slider />
            <Img
              src={value ? '/static/toggle-sun.svg' : '/static/toggle-moon.svg'}
              toggle={value}
            />
          </Wrapper>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Toggle
