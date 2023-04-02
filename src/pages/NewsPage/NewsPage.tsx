import React, { useEffect, useState} from "react"
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { useParams } from 'react-router-dom'

import dataStore from "../../store/store";
import CommentsList from "../../components/CommentsList/CommentList";
import Loader from "../../components/Loader/Loader";
import { mapTime } from "../../components/maptime";
import { IStory } from "../../types/types";

import { Container, Info, Title,Wrapper, CommentsInfo, TotalComments, StyledButton, Author, Url, StyledLink } from './styles'

interface Params {
    id: string;
}

const NewsPage:React.FC = () => {

    const { id } = useParams<keyof Params>() as Params;
    const [ story, setStory ] = useState<IStory>({} as IStory);
    const [ enabled, setEnabled ] = useState<boolean>(true)

    const { by, title, descendants, url, time, kids } = story

    const updateData = () => {
        setEnabled(false);
        dataStore.getStory(id).then((data) => {setStory(data)})
        setTimeout(() => setEnabled(true), 2000)
    }
    
    useEffect(() => {
        updateData()
    },[])

    return(
        <Container>
        {(story.id) ?
            <>
                <Wrapper>
                    <StyledLink to={'/'}>Back</StyledLink>
                    <Title>{title}</Title>
                    <Url href={url}>{url}</Url>
                        <Info>Posted by 
                            <Author>{by}</Author>
                            <div>{mapTime(time)} ago</div>
                        </Info>
                    
                </Wrapper>
                <CommentsInfo>
                    <TotalComments>{descendants} {descendants===1 ? 'comment' : 'comments'}</TotalComments>
                    <StyledButton disabled={!enabled} onClick={updateData}>Refresh</StyledButton>
                </CommentsInfo>
                <CommentsList commentIds={kids}/>
            </>
            : 
            <Loader/>
        }  
        </Container>
    )
}

export default observer(NewsPage)