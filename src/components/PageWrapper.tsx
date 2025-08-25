import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

// Define your route order
const routeOrder = [
  '/', 'name', 'startDate', 'datePicker', 'tripLength', 'vibe', 'people',
  'startDestination', 'startDestinationInput', 'endDestination', 'endDestinationInput',
  'transport', 'discountedCar', 'discountedCamper', 'discountedBus',
  'accomodation', 'hostels', 'accomodationOther', 'activities',
  'additionalNotes', 'contact', 'finish'
]

const getDirectionVariants = (direction: 'forward' | 'backward') => ({
  initial: {
    opacity: 0,
    x: direction === 'forward' ? 60 : -60,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: direction === 'forward' ? -60 : 60,
    scale: 0.98,
  },
})

// Helper function to normalize path for comparison
const normalizePath = (path: string): string => {
  if (path === '/') return '/'
  return path.startsWith('/') ? path.slice(1) : path
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const location = useLocation()
  const prevLocationRef = useRef<string | undefined>(undefined)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')

  useEffect(() => {
    if (prevLocationRef.current !== undefined) {
      const prevPath = normalizePath(prevLocationRef.current)
      const currentPath = normalizePath(location.pathname)
      
      const prevIndex = routeOrder.indexOf(prevPath)
      const currentIndex = routeOrder.indexOf(currentPath)

      console.log('Navigation:', {
        from: prevPath,
        to: currentPath,
        prevIndex,
        currentIndex,
        direction: currentIndex > prevIndex ? 'forward' : 'backward'
      }) // Debug log

      if (prevIndex !== -1 && currentIndex !== -1) {
        const newDirection = currentIndex > prevIndex ? 'forward' : 'backward'
        setDirection(newDirection)
      }
    }
    prevLocationRef.current = location.pathname
  }, [location.pathname])

  const variants = getDirectionVariants(direction)

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
        opacity: { duration: 0.2 },
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}