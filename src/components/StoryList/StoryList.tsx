import React from 'react'
import { observer } from 'mobx-react'

import Story from '../Story/Story';
import { IStory } from '../../types/types';

interface StoryListProps {
    data: IStory[];
}

const StoryList:React.FC<StoryListProps> = ({data}) => {

    return(
        <ol>
            {data.map(story => 
                <Story story={story} key={story.id}/>
            )}
        </ol>
    )
}

export default observer(StoryList)