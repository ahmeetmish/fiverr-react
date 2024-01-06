import * as S from './styled'

import { Link } from 'react-router-dom'

import StarIcon from '../../assets/star-icon.png'

export default function Gig() {
  return (
    <S.Gig>
        <div className="container">
            <div className="content">
                <div className="navigation">
                    <Link>Home</Link> <span>/</span> <Link>Graphics & Design</Link> <span>/</span> <Link>AI Artists</Link>
                </div>
                <h2>I will create stunning and quick ai pictures for you</h2>
                <div className="user">
                    <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a1052cf1272354b69be17f131b104624-1680286166166/d83e1e97-69e6-48dd-a61c-b2997cfcb7c7.png" />
                    <div className="user-details">
                        <div className="information">
                            <p>Diana W</p>
                            <Link><span>@diana_wolters</span></Link>
                        </div>
                        <div className="rating">
                            <img src={StarIcon} />
                            <span>(89)</span>
                        </div>
                    </div>
                </div>
                <div className="gig">
                    <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/309720492/original/8733894b2f6d7768d335152b47cf207df397f9d1/create-stunning-ai-pictures-for-you-with-midjourney.png" />
                    <div className="gig-about">
                        <h3>About this gig!</h3>
                        <p>It's important to note that I won't create logos or text-heavy pictures. <b>Please</b> also bear in mind that if you require a picture that has a person's face, you may not get an exact match from the AI because it doesn't work like a filter.
                        <br />Thanks for considering my services. <b>Please don't</b> hesitate to contact me to discuss your ideas before placing an order.
                        </p>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="packages">
                    <div className="actions">
                        <button className='active'>Basic</button>
                        <button>Standard</button>
                        <button>Premium</button>
                    </div>
                    <div className="package-details">
                        <div className="category">
                            <p>Image Generation</p>
                            <div className="price">
                                <span>$19.10</span>
                            </div>
                        </div>
                        <div className="description">
                            <p>One custom digital design generated with Midjourney</p>
                        </div>
                        <div className="delivery">
                            <span>2 Days Delivery</span>
                            <span>5 Revisions</span>
                        </div>
                        <div className="list">
                            <ul>
                                <li>Prompt creation</li>
                                <li>Artwork delivery</li>
                                <li>Image upscaling</li>
                                <li>Image editing</li>
                            </ul>
                        </div>
                        <div className="actions">
                            <button className='continue'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </S.Gig>
  )
}