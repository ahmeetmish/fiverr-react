import * as S from './styled'

import SearchIcon from '../../assets/search-icon.svg'
import FeaturedChar from '../../assets/featured-char.png'

export default function Hero() {
  return (
    <S.Hero>
        <div className="container">
        <div className="content">
            <h2>Find the right <span>freelance</span> <br />
                service, right away
            </h2>
            <div className="searchbar">
                <input type="text" placeholder='Search for any service..' />
                <button>
                    <img src={SearchIcon} />
                </button>
            </div>
            <div className="popular">
                <p>Popular: </p>
                <button>Website Design</button>
                <button>WordPress</button>
                <button>Logo Design</button>
                <button>AI Services</button>
            </div>
        </div>
        <div className="image">
            <img src={FeaturedChar} />
            <div className='char-info'>
                <img src={FeaturedChar} />
                <div>
                    <span>@Jenny</span>
                    <p>Children's Voice Over</p>
                </div>
            </div>
        </div>
        </div>
    </S.Hero>
  )
}