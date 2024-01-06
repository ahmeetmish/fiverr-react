import * as S from './styled'

import CheckMark from '../../assets/check-mark.svg'

export default function Features() {
  return (
    <S.Features>
        <div className="container">
          <div className="content">
            <h2>The best part? Everything.</h2>
            <div className='features-list'>
              <div>
                <span><img src={CheckMark} /> Stick to your budget</span>
                <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
              </div>
              <div>
                <span><img src={CheckMark} /> Get quality work done quickly</span>
                <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
              </div>
              <div>
                <span><img src={CheckMark} /> Pay when you're happy</span>
                <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
              </div>
              <div>
                <span><img src={CheckMark} /> Count on 24/7 support</span>
                <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
              </div>
            </div>
          </div>
          <div className="video">
            <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls></video>
          </div>
        </div>
    </S.Features>
  )
}