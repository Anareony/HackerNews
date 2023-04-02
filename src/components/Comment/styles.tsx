import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderContainer = styled.div`
    display: flex;
    margin-bottom: 10px ;
`
const Container = styled.div`
    padding: 0 0 15px 15px;
    margin-top: 10px;
    
`
const Text = styled.p`
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
`
const Author = styled.span`
    font-weight: 600;
    padding-right: 5px;
`
const Time = styled.span`
    padding-right: 5px;
`

export { HeaderContainer, Container, Text, Author, Time }