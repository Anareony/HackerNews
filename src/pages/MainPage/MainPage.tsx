import React, { useState } from 'react'
import { observer } from 'mobx-react'

import dataStore from '../../store/store'
import StoryList from '../../components/StoryList/StoryList'
import Loader from '../../components/Loader/Loader'

import { Container, InnerContainer, StyledButton, Header } from './styles'

const MainPage:React.FC = () => {

    let [enabled, setEnabled] = useState<boolean>(true)

    const refreshData = () => {
        setEnabled(false);
        dataStore.getStories()
        setTimeout(() => setEnabled(true), 2000)
    }

    return(
        <Container>
            <InnerContainer>
                <Header>HN New Stories</Header>
                <StyledButton disabled={!enabled} onClick={refreshData}>Refresh</StyledButton>
            </InnerContainer>
            {dataStore.isNewsLoaded ?
                <StoryList data={dataStore.stories}/>
                :
                <Loader/>
            }
        </Container>
    )
}

export default observer(MainPage)