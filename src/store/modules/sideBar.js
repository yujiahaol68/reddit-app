const state = {
    sideBarOpened: false
}

const getters = {
    openState: state => {
        return state.sideBarOpened
    }
}

const mutations = {
    toggleSideBar: state => {
        console.log('sideBarToggle')
        state.sideBarOpened = true
    },
    sideBarClose: state => {
        console.log('sideBarClose')
        state.sideBarOpened = false
    }
}

export default {
    state,
    getters,
    mutations
}