import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.li`
    margin-bottom: 10px;
    border: 1px solid #343536;
    border-radius: 5px;
    background-color: #343536;
    padding: 5px;
    padding-right: 50px;

`
const Score = styled.div`
    font-size: 20px;
    padding-right: 10px;
`
const By = styled.span`
    padding: 0 5px;
`
const Title = styled.p`
    font-size: 18px;
    padding-top: 5px;
`
const StyledLink = styled(Link)`
    
`

export { Container, By, Title, Score, StyledLink }