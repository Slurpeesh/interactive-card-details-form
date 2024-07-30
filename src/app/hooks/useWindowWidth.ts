import { throttle } from '@/app/libs/throttle'
import { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = throttle(() => {
      setWidth(window.innerWidth)
    }, 500)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

export default useWindowWidth
