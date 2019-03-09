import { useEffect, useState } from 'react'

const getSize = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
  scrollHeight: document.body.scrollHeight,
  scrollWidth: document.body.scrollWidth,
})

export const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState(getSize())

  const handleResize = () => setWindowSize(getSize())

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

const getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset,
})

export const useWindowScrollPosition = () => {
  const [position, setPosition] = useState(getPosition())

  const handleScroll = () => setPosition(getPosition())

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}
