import * as S from './styled'

import Hero from '../../components/Hero'
import TrustedBy from '../../components/TrustedBy'
import Slide from '../../components/Slide'
import ServiceCard from '../../components/ServiceCard'
import Features from '../../components/Features'
import SignUpBoard from '../../components/SignUpBoard'
import ProjectCard from '../../components/ProjectCard'

import { Cards, Projects } from '../../data'

export default function Home() {
  return (
    <S.Home>
      <Hero />
      <TrustedBy />
      <Slide slidesToShow={5} arrowScroll={5} title='Popular services'>
        {Cards.map(card => (
          <ServiceCard item={card} key={card.id} />
        ))}
      </Slide>
      <Features />
      <SignUpBoard />
      <Slide slidesToShow={4} arrowScroll={4} title='Inspiring work made on Fiverr'>
        {Projects.map(project => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </S.Home>
  )
}