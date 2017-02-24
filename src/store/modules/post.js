const state = {
    hasHTML: false,
    title: '',
    author: '',
    authorAvatar: '...defaultImageLink',
    hasImg: true,
    headImgSourse: '',
    body: '',
    permalink: ''
}

const getters = {
    resetPost: state => {
        state.hasHTML = false
        state.title = ''
        state.author = ''
        state.authorAvatar = '...defaultImageLink'
        state.hasImg = true
        state.headImgSourse = ''
        state.body = ''
        state.permalink = ''
    }
}

const mutations = {

}