import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: var(--secondary);
    align-items: center;
    justify-content: center;
    color: var(--text);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`
export const HeaderWrapper = styled.div`
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

export const LogoIMG = styled.img`
    width: 40px;
    margin-right: 10px;
`