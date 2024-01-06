import * as S from './styled'

import Slider from 'infinite-react-carousel'

export default function Slide({ title, children, slidesToShow, arrowScroll }) {
  return (
    <S.Slide>
        <div className="container">
        <h2>{title}</h2>
            <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
                {children}
            </Slider>
        </div>
    </S.Slide>
  )
}