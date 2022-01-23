import IconImg from '../../assets/icon.png'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'

export function Header() {
    return(
        <Container>
            <img src={IconImg} alt='cowala icon' 
                style={{height: '101px', position: 'relative', top: '8px'}}>
            </img>

            <img src={logoImg} alt='cowala logo' 
                style={{height: '70px', marginLeft: '20px'}}>
            </img>
        </Container>
    )
}