import axios from 'axios'

//Define API request URL and request process

const url = 'https://www.reddit.com/r/'

export default {
    getSubreddits: function(state, cb) {
        axios.get(url + state.category +'/'+ state.sortWay + '.json?limit=' + state.pageLimit)
            .then((res) => {
                if(res.status >= 200 && res.status < 300) {
                    cb(res.data.data.children)
                }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
    getMoreSub: function(state, cb) {
        axios.get(url + state.category +'/'+ state.sortWay + '.json?limit=' + state.pageLimit + '&after=' + state.lastID)
            .then((res) => {
                if(res.status >= 200 && res.status < 300) {
                    cb(res.data.data.children)
                }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
    },
}