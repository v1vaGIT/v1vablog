import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = Boolean(localStorage.getItem('userAuth'));
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        console.log('SET USER AUTH', bool)
        this._isAuth = bool
        //window.location.reload();
    }
    setUser(user) {
        console.log(user)
        this._user = user
    }

    get isAuth() {
        console.log('GET USER AUTH', this._isAuth)
        return this._isAuth
    }
    get user() {
        return this._user
    }
}