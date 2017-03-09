const state = {
    imageUrl: '',
    singleImg: true
}

const getters = {
    sourceUrl: state => state.imageUrl
}

const mutations = {
    
}

const actions = {
    passURL: function ({state}, url) {
        state.imageUrl = url
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}