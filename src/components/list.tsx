import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

//@ts-ignore
const List = observer(({ number }) => {
    return(
        <ul>
            {number.storys.map( (story:any, index:any) => {
                return (
                    <div key={index}>{story.title}</div>
                )
            })}
        </ul>
    )
})

export default List