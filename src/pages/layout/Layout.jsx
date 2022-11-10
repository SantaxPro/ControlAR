import React from 'react'
import { motion } from 'framer-motion'
import { EmptyNavigationBar, NavigationBar } from '../../components/NavigationBar'

export const NavigationLayout = ({children, empty, text}) => {
  return (
    <motion.div 
    className='w-full h-full mt-16'>
      {empty ? <EmptyNavigationBar text={text} /> : <NavigationBar/>}
        {children}
    </motion.div>
  )
}

export const EmptyNavigationLayout = ({children, text}) => {
  return (
    <div className='w-full h-full mt-16'>
      <EmptyNavigationBar text={text} />
        {children}
    </div>
  )
}

