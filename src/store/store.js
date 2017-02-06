import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        sideBarOpened: false
    },
    getters: {
        openState: state => {
            return state.sideBarOpened;
        }
    },
    mutations: {
        toggleSideBar: state => {
            console.log('sideBarToggle');
            state.sideBarOpened = true;
        },
        sideBarClose: state => {
            console.log('sideBarClose');
            state.sideBarOpened = false;
        }
    }
});