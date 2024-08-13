import imgHeader from '../../assets/header.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return(
    <HeaderContainer>
      <img src={imgHeader} alt="logo Github"></img>
    </HeaderContainer>
  )
}
