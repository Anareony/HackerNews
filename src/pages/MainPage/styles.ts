import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 25px 25% 0;
`
const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
`
const StyledButton = styled.button`
    border-radius: 9999px;
    background-color: #D7DADC;
    color: #000;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
`

const Header = styled.h1`
    font-size: 32px;
    font-weight: 600;
`

export { Container, InnerContainer, StyledButton, Header}