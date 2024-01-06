import Home from './pages/home'
import Gigs from './pages/gigs'
import Header from "./components/Header"
import Footer from './components/Footer'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'

export default function App() {

  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gigs/',
          element: <Gigs />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}