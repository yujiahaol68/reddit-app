const state = {
    imageUrl: '',
    singleImg: true
}

const getters = {
    sourceUrl: state => {
        return state.imageUrl
    }
}

const mutations = {
    
}

export default {
    state,
    getters,
    mutations
}