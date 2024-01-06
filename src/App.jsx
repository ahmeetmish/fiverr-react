import Home from './pages/home'
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