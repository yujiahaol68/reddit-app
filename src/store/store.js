import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import sideBar from './modules/sideBar'
import home from './modules/home'
import post from './modules/post'
import imgView from './modules/imgView'

Vue.use(Vuex)

export const store = new Vuex.Store({
    
    state: {
        infiniteScrollEnable: false,
        scroller: window
    },
    getters,
    mutations,
    actions,
    modules: {
        sideBar, post, imgView, home
    }

})