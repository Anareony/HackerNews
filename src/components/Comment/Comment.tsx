import React, { useEffect, useState } from 'react'

import dataStore from "../../store/store"
import CommentsList from "../CommentsList/CommentList"
import { mapTime } from '../maptime'
import { IComment } from '../../types/types'
import { observer } from 'mobx-react'

import { HeaderContainer, Container, Text, Author, Time } from './styles'
import Loader from '../Loader/Loader'

interface ICommentId {
    commentId: number;
}

const Comment: React.FC<ICommentId> = ({commentId}) => {

    const [comment, setComment] = useState<IComment>({} as IComment);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    const { text, kids, by, time, deleted, dead } = comment ;

    useEffect(() => {
        dataStore.getComment(commentId).then((data) => {
            setComment(data)
            setIsLoaded(true)
        })
    },[commentId])

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    return(
        <>{!deleted && !dead &&
            <>
                {(isLoaded) ?
                    <Container onClick={handleClick}>
                        <HeaderContainer>
                            <Author>{by}</Author>
                            <Time>{mapTime(time)} ago</Time>
                            {kids &&
                                <span>{kids.length} {kids.length>1 ? 'replies' : 'reply'}</span>
                            } 
                        </HeaderContainer>
                        <Text>
                            <div dangerouslySetInnerHTML={{__html:text}}/>
                        </Text>
                            {isOpen && kids && <CommentsList commentIds={kids}/>}
                    </Container>
                    :
                    <Loader/>
                }
            </>
            }
        </>
    )
}

export default observer(Comment)