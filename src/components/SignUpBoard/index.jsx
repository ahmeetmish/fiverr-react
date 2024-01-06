import * as S from './styled'

import { Link } from 'react-router-dom'

import SignUpBoardChar from '../../assets/signup-board-char.png'

export default function SignUpBoard() {
  return (
    <S.SignUpBoard>
      <div className="container">
        <div className="content">
          <h2>Suddenly it's all so <span>doable.</span></h2>
          <Link to=''>Join Fiverr</Link>
        </div>
        <div className="image">
          <img src={SignUpBoardChar} />
        </div>
      </div>
    </S.SignUpBoard>
  )
}