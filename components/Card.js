import styled from 'styled-components'

const Container = styled.div`
    height: 400px;
    width: 300px;
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;

    &:hover > img{
        height: 200px;
        width: 200px;
    }

    &:hover h2{
        margin-bottom: 0px;
    }

    &:hover > div{
        border-radius: 15px 15px 0 0;
    }
`
const ImgCard = styled.img`
    height: 250px;
    width: 250px;
    flex-shrink: 1;
    margin: 20px 0;

    transition: .2s ease-in-out;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary);
    width: 100%;
    height: 100%;
    border-radius: 25px 25px 0 0;

    transition: .3s;
`

const Title = styled.h2`
    color: var(--text);
    font-size: 36px;
    margin-bottom: 50px;

    transition: .2s ease-out;
`

const Type = styled.img`
    height: 80px;
`
export default function Card() {
    return(
        <Container>
            <ImgCard src="./pokemon.png" alt="Poketdex"/>

            <Content>
                <Title>Pikachu</Title>
                
                <Type src="./types/Ice.svg"/>
            </Content>
        </Container>
    )
}
