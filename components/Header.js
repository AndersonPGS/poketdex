import Link from 'next/link'
import { Container, HeaderWrapper, LogoIMG } from '../styles/Header'

export default function Header() {
    return(
        <Container>
            <HeaderWrapper>
                <div>
                    <LogoIMG src="./pokemon.png" alt="Poketdex"/>
                    <Link href="/"><b>Poketdex</b></Link>
                </div>
                <div>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="https://github.com/AndersonPGS/poketdex" target="_blank"><a>GitHub</a></Link>
                    <Link href=""><a>Sobre</a></Link>
                </div>
            </HeaderWrapper>
        </Container>
    )
}
