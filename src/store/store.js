import Vue from 'vue'
import Vuex from 'vuex'

import sideBar from './modules/sideBar'
import post from './modules/post'
import imgView from './modules/imgView'

Vue.use(Vuex)

export const store = new Vuex.Store({
    
    state: {
        imageUrl: ''
    },
    getters: {
        sourceUrl: state => {
            return state.imageUrl
        }
    },
    mutations: {
        
    },
    actions: {

    },
    modules: {
        sideBar, post, imgView
    }

})