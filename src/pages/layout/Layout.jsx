import React from 'react'
import { NavigationBar } from '../../components/NavigationBar'

export const NavigationLayout = ({children}) => {
  return (
    <div>
        <NavigationBar />
        {children}
    </div>
  )
}
