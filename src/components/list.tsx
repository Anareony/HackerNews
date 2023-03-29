import React from 'react'
import { observer } from 'mobx-react'
import ListItem from './ListItem'
import dataStore from '../store/store'
import { Container, InnerContainer, StyledButton, Header } from './stylesList'

// type IItem = {
//     id?: number;
//     storys:string;
// }

// type ListProps = {
//     number: IItem[]
// }

//@ts-ignore
const List = ({number}) => {

    return(
        <Container>
            <InnerContainer>
                <Header>HN New Stories</Header>
                <StyledButton onClick={dataStore.getData}>Refresh</StyledButton>
            </InnerContainer>
            <ul>
                {number.storys.map( (story:any, index:any) => 
                    <ListItem story={story}/>
                )}
            </ul>
        </Container>
    )
}

export default observer(List)