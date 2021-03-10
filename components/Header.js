import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.nav`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: #232323;
    align-items: center;
    justify-content: center;
    color: white;
`
const HeaderWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
    }

    > div a {
        margin-left: 70px;
    }

    > div a::first-child {
        margin-left: 0px;
    }
`

const LogoIMG = styled.img`
    width: 40px;
    margin-right: 10px;
`

export default function HeaderNav() {
    return(
        <Header>
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
        </Header>
    )
}
