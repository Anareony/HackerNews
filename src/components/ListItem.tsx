import React from 'react'
import { Link } from 'react-router-dom';
import { mapTime } from './maptime';
import { Container, By, Title, StyledLink } from './styles';

type IStory = {
    id?: number;
    by: string;
    title: string;
    time: number;
    score: number;
}

type StoryItemProps = {
    story: IStory;
}

const ListItem: React.FC<StoryItemProps> = ({story}) => {
    return(
        <Container>
            <StyledLink to={''}>
                <span>{story.score} {story.score>1 ? 'upvotes' : 'upvote'}</span>
                <By >posted by {story.by}</By>
                <span >{mapTime(story.time)} ago</span>
                <Title>{story.title}</Title>
            </StyledLink>
        </Container>
    )
}

export default ListItem