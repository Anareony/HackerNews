import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.li`
    padding: 5px;
    margin: 0 20px;
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