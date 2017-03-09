import api from '../api'
import * as types from '../mutation-types'

const state = {
    subreddits: [],
    category: 'all',
    categories: ['all', 'food', 'space', 'movies', 'funny', 'news'],
    lastID: '',
    pageLimit: 25,
    sortWay: 'top',
    sortOption: ['top', 'hot', 'new'],
    isLoading: false
}

const getters = {
    getSubreddits: state => state.subreddits,
    getCategory: state => state.category,
    getCategories: state => state.categories,
    getSort: state => state.sortWay,
    getSortOption: state => state.sortOption,
    getLoadingStatus: state => state.isLoading
}

const mutations = {
    [types.GET_LIST_DATA] (state, data) {
        state.subreddits = data
        state.lastID = state.subreddits[state.pageLimit - 1].kind +'_'+ state.subreddits[state.pageLimit - 1].data.id
    },
    [types.GET_MORE_LIST_DATA] (state, data) {
        state.subreddits = state.subreddits.concat(data)
        let count = state.subreddits.length
        state.lastID = state.subreddits[count - 1].kind +'_'+ state.subreddits[count - 1].data.id
    },
    [types.COM_IS_LOADING] (state, status) {
        state.isLoading = status
    },
    [types.CATEGORY_CHANGE] (state, current) {
        state.category = current
    },
    [types.SORTWAY_CHANGE] (state, current) {
        state.sortWay = current
    },
    [types.CLEAR_LIST] (state) {
        state.subreddits = []
    }
}

const actions = {
    //get Data for listing
    getListData: function ({commit, state}) {
        commit(types.COM_IS_LOADING, true)
        api.getSubreddits(state, (res) => {
            commit(types.GET_LIST_DATA, res)
        })
        commit(types.COM_IS_LOADING, false)     
    },
    getMoreListData: function ({commit, state}) {
        commit(types.COM_IS_LOADING, true)
        api.getMoreSub(state, (res) => {
            commit(types.GET_MORE_LIST_DATA, res)
        })
        commit(types.COM_IS_LOADING, false)
    },
    refreshList: function ({commit, state}) {
        commit(types.CLEAR_LIST)
        commit(types.COM_IS_LOADING, true)
        api.getSubreddits(state, (res) => {
            commit(types.GET_LIST_DATA, res)
        })
        commit(types.COM_IS_LOADING, false)             
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}