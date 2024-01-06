import * as S from './styled'

import { Link } from 'react-router-dom'

export default function ServiceCard({ item }) {
  return (
    <Link to='/gigs?cat=design'>
        <S.ServiceCard>
            <img src={item.img} />
            <span>{item.desc}</span>
            <p>{item.title}</p>
        </S.ServiceCard>
    </Link>
  )
}