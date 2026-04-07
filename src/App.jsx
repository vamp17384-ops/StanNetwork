import { useState } from 'react'
import Navbar from './components/Navbar'
import ProxyPage from './pages/ProxyPage'
import GamesPage from './pages/GamesPage'
import MoviesPage from './pages/MoviesPage'

const TABS = {
  proxy:  <ProxyPage />,
  games:  <GamesPage />,
  movies: <MoviesPage />,
}

export default function App() {
  const [activeTab, setActiveTab] = useState('proxy')

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main key={activeTab}>
        {TABS[activeTab]}
      </main>
    </>
  )
}
