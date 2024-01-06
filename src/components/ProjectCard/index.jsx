import * as S from './styled'

import { Link } from 'react-router-dom'

export default function ProjectCard({ item }) {
  return (
    <Link to='/'>
        <S.ProjectCard>
            <img src={item.img} />
            <Link to='/'>
              <div className="user">
                <img src={item.pp} />
                <div className="text">
                  <p>{item.cat}</p>
                  <span>by {item.username}</span>
                </div>
              </div>
            </Link>
        </S.ProjectCard>
    </Link>
  )
}