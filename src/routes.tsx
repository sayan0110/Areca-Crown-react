import type { ReactElement } from 'react'
import Home from './screens/Home'
import About from './screens/About'
import Rooms from './screens/Rooms'
import PremiumRoom from './screens/PremiumRoom'
import SuperiorRoom from './screens/SuperiorRoom'
import Restaurant from './screens/Restaurant'
import ExploreKaziranga from './screens/ExploreKaziranga'
import Gallery from './screens/Gallery'
import Contacts from './screens/Contacts'

type AppRoute = { path: string; element: ReactElement }

// One screen per header menu / submenu item.
export const routes: AppRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/about-us', element: <About /> },
  { path: '/rooms', element: <Rooms /> },
  { path: '/premium-room', element: <PremiumRoom /> },
  { path: '/superior-room', element: <SuperiorRoom /> },
  { path: '/restaurant', element: <Restaurant /> },
  { path: '/explore-kaziranga', element: <ExploreKaziranga /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/contact-us', element: <Contacts /> },
]
