import axios from 'axios'
import { makeObservable, observable, toJS} from 'mobx'

class DataStore {
    data: string[]
    storys: string[]

    constructor() {
        this.data = []
        this.storys = []

        makeObservable(this,{
            data: observable,
            storys: observable
        })

        this.getData()    
    }

    getData = async () => {
        await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty?")
            .then(response => {
                const slicedArray = response.data.slice(0, 100);
                this.data = slicedArray
            })

        this.data.map( story => {
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`)
                .then(response => {
                const project = JSON.stringify(response.data)
                this.storys.push(toJS(response.data))
                console.log(toJS(this.storys))
            })
        }) 
    }
}

const dataStore = new DataStore()
export default dataStore
