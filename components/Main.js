import { Container, MainWrapper, Title, CardList } from '../styles/Main'
import Card from './Card'


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
