import styled from 'styled-components'

export const Span = styled.span`
  position: relative;
  display: inline-block;
  width: fit-content;
`

export const Block = styled.span`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  animation-name: move;
  animation-fill-mode: both;
  transform: scaleY(0);
  transform-origin: bottom;

  @keyframes move {
    47% {
      transform-origin: bottom;
      animation-mode: forwards;
      transform: scaleY(1);
    }
    50% {
      transform-origin: top;
      transform: scaleY(1);
    }
    100% {
      transform-origin: top;
      transform: scaleY(0);
    }
  }
`

export const Element = styled.div`
  opacity: 0;
  animation-name: reveal;
  animation-duration: 0.01s;
  animation-fill-mode: both;

  @keyframes reveal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
