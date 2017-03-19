import axios from 'axios'

//Define API request URL and request process

const url = 'https://www.reddit.com/'

export default {
    getSubreddits: function (state, cb) {
        // eg: https://www.reddit.com/r/all/top.json?limit=25
        axios.get(url + 'r/' + state.category +'/'+ state.sortWay + '.json?limit=' + state.pageLimit)
            .then((res) => {
                if(res.status >= 200 && res.status < 300) {
                    cb(res.data.data.children)
                }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    getMoreSub: function (state, cb) {
        // eg: https://www.reddit.com/r/all/top.json?limit=25&after=t3_60445l
        axios.get(url + 'r/' + state.category +'/'+ state.sortWay + '.json?limit=' + state.pageLimit + '&after=' + state.lastID)
            .then((res) => {
                if(res.status >= 200 && res.status < 300) {
                    cb(res.data.data.children)
                }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    getPostDetail: function (state, cb) {
        // eg: https://www.reddit.com/by_id/t3_15bfi0.json
        axios.get(url + 'by_id/' + state.id + '.json')
            .then((res) => {
                if(res.status >= 200 && res.status < 300) {
                    cb(res.data.children)
                }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    }
}