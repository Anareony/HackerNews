import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    margin: 25px 25% 0;
    padding: px;

`

const Info = styled.div`
    display: flex;
    margin-top: 5px;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 5px;
`

const Wrapper = styled.div`
    margin-left: 15px;
    border-bottom: 1px solid grey;
    padding-bottom: 25px;
`
const CommentsInfo = styled.div`
    margin: 10px 0 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TotalComments = styled.div`
    font-size: 18px;
    font-weight: 600;
`

const StyledButton = styled.button`
    border-radius: 9999px;
    background-color: #D7DADC;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 700;
`
const Author = styled.span`
    padding: 0 5px;
    font-weight: 600;
`
const Url = styled.a`
    
`
const StyledLink = styled(Link)`
    font-size: 24px;
    position: fixed;
    left: 300px;
    top: 50px;
    &:hover{
        color: #fff;
    }
`
export { Container, Info, Title,Wrapper,CommentsInfo, TotalComments, StyledButton, Author, Url, StyledLink }