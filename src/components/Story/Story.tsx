import React from 'react'

import { mapTime } from '../maptime';
import { IStory } from '../../types/types';

import { Container, By, Title, StyledLink } from './styles';

interface StoryProps {
    story: IStory;
}

const Story: React.FC<StoryProps> = ({story}) => {

    const { id, by , title, time, score, dead, deleted} = story

    return(
        <>
        {(!dead && !deleted) &&
            <Container>
                <StyledLink to={`${id}`}>
                    <Title>{title}</Title>
                    <span>{score} {story.score>1 ? 'upvotes' : 'upvote'}</span>
                    <By >posted by {by}</By>
                    <span>{mapTime(time)} ago</span>
                </StyledLink>
            </Container>
        }
        </>   
    )
}

export default Story