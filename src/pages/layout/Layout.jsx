import React from 'react'
import { EmptyNavigationBar, NavigationBar } from '../../components/NavigationBar'

export const NavigationLayout = ({children, empty, text}) => {
  return (
    <div>
      {empty ? <EmptyNavigationBar text={text} /> : <NavigationBar/>}
        {children}
    </div>
  )
}

