import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

const MainWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Title = styled.h1`
    width: 100%;
    color: var(--text);
    margin: 90px 0 20px 5px;
`

const CardList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`


export default function Main() {
    return(
        <Container>
            <MainWrapper>
                <Title>Poketdex</Title>
                <CardList>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardList>
            </MainWrapper>
        </Container>
    )
}
