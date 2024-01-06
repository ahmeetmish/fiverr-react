import * as S from './styled'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import GigCard from '../../components/GigCard'

import { GigList } from '../../data'

export default function Gigs() {

  const [modal, setModal] = useState(false)
  const [sort, setSort] = useState('createdAt')

  const reSort = (type) => {
    setSort(type)
    setModal(false)
  }

  return (
    <S.Gigs>
        <div className="container">
            <div className="navigation">
                <Link to='/'>Home</Link> <span>/</span> <Link>Graphics & Design</Link>
            </div>
            <div className="page-desc">
                <div className="left">
                    <h2>AI Artists</h2>
                    <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
                </div>
                <div className="right">
                    <p>Sort by:</p>
                    <div onClick={() => setModal(!modal)}>
                        <span>{sort === 'best-sales' ? 'Best Selling': 'Newest'}</span>
                        <span>↓</span>
                    </div>
                    {modal && (
                        <div className="sort-menu">
                        {sort === 'best-sales' ? (
                            <span onClick={() => reSort('createdAt')}>Newest</span>) :  
                            (<span onClick={() => reSort('best-sales')}>Best Selling</span>)}
                    </div>
                    )}
                </div>
            </div>
            <div className="gigs">
                {GigList.map(gig => (
                    <GigCard key={gig.id} item={gig} />
                ))}
            </div>
        </div>
    </S.Gigs>
  )
}