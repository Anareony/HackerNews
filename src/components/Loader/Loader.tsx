import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    margin-top: 30px;
`

const Loader:React.FC = () => {
    return (
        <Container>Loading...</Container>
    )
}

export default Loader