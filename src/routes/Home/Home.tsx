import React from 'react'

export interface HomeProps {
  className?: string
}

const Home: React.FC<HomeProps> = (props) => {
  const renderHome = () => {
    return (
      <div>
        <h1> Home page</h1>
      </div>
    )
  }

  return renderHome()
}

export default Home
