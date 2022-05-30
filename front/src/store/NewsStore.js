import {makeAutoObservable} from 'mobx';

export default class NewsStore {
    constructor() {
        this._news = []

        this._selectedNews = {}
        makeAutoObservable(this)
    }

    setNews(news) {
        return this._news = news
    }
    
    setSelectedNews(news) {
       return this._selectedNews
    }

    get news() {
        return this._news
    }

    get selectedNews() {
        return this._selectedNews
    }
}