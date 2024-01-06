import * as S from './styled'

import { Link } from 'react-router-dom'

import StarIcon from '../../assets/star-icon.png'
import HeartIcon from '../../assets/heart-icon.png'

export default function GigCard({ item }) {
  return (
    <Link to='/gig/1'>
    <S.GigCard>
        <img src={item.img} />
        <div className="information">
            <div className="user">
                <img src={item.pp} />
                <span>{item?.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="rating">
                <img src={StarIcon} />
                <span>{item.star}</span>
            </div>
        </div>
        <div className="details">
            <img src={HeartIcon} />
            <div>
                <span>From</span>
                <p>${item.price}</p>
            </div>
        </div>
    </S.GigCard>
    </Link>    
  )
}