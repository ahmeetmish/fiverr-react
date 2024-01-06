import * as S from './styled'

import { Link } from 'react-router-dom'

import InstagramIcon from '../../assets/instagram-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import LinkedInIcon from '../../assets/linkedin-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'

export default function Footer() {
  return (
    <S.Footer>
        <div className="container">
          <div className="footer">
            <div className="categories">
              <span>Categories</span>
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
            </div>
            <div className="about">
              <span>About</span>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
            </div>
            <div className="supportandeducation">
              <span>Support and Education</span>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
            </div>
            <div className="community">
              <span>Community</span>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
            </div>
            <div className="business">
              <span>Business Solutions</span>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
              <Link>( Item )</Link>
            </div>
          </div>
          <div className="sub-footer">
            <div className="left">
              <h2>fiverr.</h2>
              <span>© Fiverr International Ltd. 2024</span>
            </div>
            <div className="right">
              <img src={InstagramIcon} />
              <img src={FacebookIcon} />
              <img src={LinkedInIcon} />
              <img src={TwitterIcon} />
              <span>English</span>
            </div>
          </div>
        </div>
    </S.Footer>
  )
}