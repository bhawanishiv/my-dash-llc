import { useRoutes, Outlet } from 'react-router-dom'

import React from 'react'
import routes from './configs/routes.config'

function App() {
  const element = useRoutes(routes)
  return (
    <div className='App'>
      {element}
      <Outlet />
    </div>
  )
}

export default App
