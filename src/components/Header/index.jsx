import { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'

import * as S from './styled'

export default function Header() {

  const { pathname } = useLocation()

  const [active, setActive] = useState(false)
  const [modal, setModal] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
        window.removeEventListener('scroll', isActive)
    }
  }, [])

  const currentUser = {
    id: 1,
    isSeller: true,
    username: 'Ahmet',
    profilePicture: 'https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-124731.jpg?size=338&ext=jpg'
  }

  return (
    <S.Header className={active || pathname !== '/' ? 'active' : ''}>
        <div className="container">
            <div className="logo">
                <Link to='/'>
                    <span className='logo-text'>fiverr</span>
                </Link>
                <span className='logo-dot'>.</span>
            </div>
            <nav>
                <Link to='/'>Fiverr Business</Link>
                <Link to='/'>Explore</Link>
                <Link to='/'>English</Link>
                {!currentUser?.isSeller && <Link to='/'>Become a Seller</Link>}
                {!currentUser && <Link to='/'>Sign In</Link>}
                <span> | </span>
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={() => setModal(!modal)}>
                        <img src={currentUser?.profilePicture} />
                        <span>{currentUser?.username}</span>
                        {modal && <div className="user-options">
                            {currentUser?.isSeller && (
                                <>
                                    <Link to='/gigs'>Gigs</Link>
                                    <Link to='/addgig'>Add Gig</Link>
                                </>
                            )}
                            <Link to='/orders'>Orders</Link>
                            <Link to='/messages'>Messages</Link>
                            <Link to='/'>Log out!</Link>
                        </div>}
                    </div>
                )}
            </nav>
        </div>
        {(active || pathname !== '/') && (
        <div className="container">
            <nav className='sub-nav'>
                <Link>Graphics & Design</Link>
                <Link>Programming & Tech</Link>
                <Link>Digital Marketing</Link>
                <Link>Video & Animation</Link>
                <Link>Writing & Translation</Link>
                <Link>Music & Audio</Link>
                <Link>Business</Link>
                <Link>Data</Link>
                <Link>Photography</Link>
                <Link>AI Services</Link>
            </nav>
        </div>
        )}
    </S.Header>
  )
}