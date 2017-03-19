// data for detail page

const state = {
    id: '',
    title: '',
    author: '',
    authorAvatar: '...defaultImageLink',
    headImgSourse: '',
    body: '',
    permalink: ''
}

const getters = {
    getTitle: state => state.title,
    getAuthor: state => state.author,
    getHeadImg: state => state.headImgSourse,
    getBody: state => state.body,
    getLink: state => state.permalink
}

const mutations = {

}