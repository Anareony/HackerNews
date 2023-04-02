import axios from 'axios'
import { toJS, runInAction, makeAutoObservable } from 'mobx'

import { IStory } from '../types/types'

class DataStore {
    baseUrl = 'https://hacker-news.firebaseio.com/v0'
    newStoriesUrl = `${this.baseUrl}/newstories.json?print=pretty?`
    itemUrl = `${this.baseUrl}/item/`;

    storiesIds: number[]
    stories: IStory[]
    isNewsLoaded:boolean
    
    constructor() {
        makeAutoObservable(this)

        this.storiesIds = []
        this.stories = []
        this.isNewsLoaded = false

        this.getStories()
        this.timer()
    }

    timer = () => setInterval(() => this.getStories(), 60000)

    getStories = async () => {
        try {
            this.storiesIds = []
            this.stories = []
            this.isNewsLoaded = false
            
            await axios
            .get(`${this.newStoriesUrl}`)
            .then(response => {
                runInAction(() => {
                    const slicedArray = response.data.slice(0, 100);
                    this.storiesIds = slicedArray
                })
            })

            this.storiesIds.map( async storyId => {
                await axios
                    .get(`${this.itemUrl + storyId}.json?print=pretty`)
                    .then(response => {
                        runInAction(() => {
                            this.stories.push(toJS(response.data))
                            this.stories.sort((a:IStory,b:IStory) => b.time - a.time)
                            this.isNewsLoaded = true
                        })
                    })
            }) 
        } catch(err) {
            console.error(err);
        }
    }

    getStory = async (storyId:string) => {
            try {
                const res = await axios
                    .get(`${this.itemUrl + storyId}.json?print=pretty`)
                    .then(({ data }) => data);
                return res;
            } catch (err) {
                    console.error(err);
            }
    }

    getComment = async (commentId:number) => {
        try {
            const res = await axios
                .get(`${this.itemUrl + commentId}.json?print=pretty`)
                .then(({ data }) => data)
            return res;
        } catch (err) {
            console.error(err);
        } 
    }
}

const dataStore = new DataStore()

export default dataStore