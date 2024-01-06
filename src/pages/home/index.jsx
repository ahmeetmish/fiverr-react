import * as S from './styled'

import Featured from '../../components/Featured'
import TrustedBy from '../../components/TrustedBy'

export default function Home() {
  return (
    <S.Home>
      <Featured />
      <TrustedBy />
    </S.Home>
  )
}