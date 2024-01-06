import * as S from './styled'

import Featured from '../../components/Featured'
import TrustedBy from '../../components/TrustedBy'
import Slide from '../../components/Slide'
import ServiceCard from '../../components/ServiceCard'

import { Cards } from '../../data'

export default function Home() {
  return (
    <S.Home>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5} title='Popular services'>
        {Cards.map(card => (
          <ServiceCard item={card} key={card.id} />
        ))}
      </Slide>
    </S.Home>
  )
}