import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const MainWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const Title = styled.h1`
    width: 100%;
    color: var(--text);
    margin: 90px 0 20px 5px;
`

export const CardList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`