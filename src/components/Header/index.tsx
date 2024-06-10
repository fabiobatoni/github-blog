import { HeaderContainer } from './styles'
import imgHeader from '../../assets/header.svg'

export function Header() {
  return(
    <HeaderContainer>
      <img src={imgHeader} alt="logo Github"></img>
    </HeaderContainer>
  )
}