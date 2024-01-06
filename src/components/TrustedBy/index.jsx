import * as S from './styled'

import Meta from '../../assets/meta-logo.png'
import Google from '../../assets/google-logo.png'
import Netflix from '../../assets/netflix-logo.png'
import PandG from '../../assets/pandg-logo.png'
import PayPal from '../../assets/paypal-logo.png'

export default function TrustedBy() {
  return (
    <S.TrustedBy>
        <span>Trusted by:</span>
        <img src={Meta} />
        <img src={Google} />
        <img src={Netflix} />
        <img src={PandG} />
        <img src={PayPal} />
    </S.TrustedBy>
  )
}