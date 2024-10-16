import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer.jsx'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout