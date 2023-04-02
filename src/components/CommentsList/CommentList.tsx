import React from "react"
import { observer } from 'mobx-react'

import Comment from "../Comment/Comment"

interface ICommentIds {
    commentIds: number[];
}

const CommentsList: React.FC<ICommentIds> = ({commentIds}) => {
    return(
        <>
        {commentIds && commentIds.map((id:number) =>
            <Comment commentId={id} key={id}/>       
        )}     
        </>
    )
}

export default observer(CommentsList)