<template>
	<div class="subreddits container">
		<mu-toast v-if="toast" :message="toastMessage" @close="hideToast"/>
		<div class="grid">
		<mu-row gutter>
    		<mu-col width="70" tablet="50" desktop="30">
    			<h2>{{category | capitalize}}</h2>
    		</mu-col>
    		<mu-col width="30" tablet="50" desktop="60">
    			<mu-select-field v-model="currentSort" :labelFocusClass="['label-foucs']">
					<mu-menu-item v-for="sort in sortOption" :value="sort" :title="sort"/>
				</mu-select-field>
    		</mu-col>
  		</mu-row>
  		</div>
		
		<ul class="item-list">
			<ul v-for="post in subreddits">
				<li><subreddit :item="post"></subreddit></li>
				<mu-divider shallowInset/>
			</ul>
		</ul>

		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loading-text="Loading..."/>

	</div>
</template>

<script>
import Subreddit from './Subreddit' 	//subreddit list item component

import axios from 'axios' 	//recommend plugin for ajax request

	export default {
		name: 'subreddits',
		props: ['category', 'refreshState'],
		data() {
			return {
				subreddits: [],
				lastID: '',
				loading: false,
				scroller: null,
				pageLimit: 25,
				currentSort: 'Top',
				sortOption: ['Top', 'Hot', 'New', 'Rising'],
				toast: false,
				toastMessage: ''
			}
		},
		mounted() {
			this.scroller = window
		},
		watch: {
			category: function(newVal){
				this.subreddits = []
				this.getData()
			},
			currentSort: function(newVal){
				this.getData()
			},
			refreshState: function(newVal){
				this.subreddits = []
				this.getData()
			}
		},
		components: {
			Subreddit
		},
		filters: {
			capitalize: function(val) {
				if(!val) return '';
				val = val.toString();
				return val.charAt(0).toUpperCase() + val.slice(1);
			}
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				axios.get('https://www.reddit.com/r/' + this.category +'/'+ this.currentSort.toLowerCase() + '.json?limit=' + this.pageLimit)
					.then((response) => {
						this.subreddits = response.data.data.children
						this.lastID = this.subreddits[this.pageLimit - 1].kind +'_'+ this.subreddits[this.pageLimit - 1].data.id
						//console.log(this.lastID)  DEBUG
					})
					.catch((error) => {
						this.toastMessage = '网络错误，数据获取失败'
						this.showToast()
					});
			},
			getMoreData() {
				axios.get('https://www.reddit.com/r/' + this.category +'/'+ this.currentSort.toLowerCase() + '.json?limit=' + this.pageLimit + '&after=' + this.lastID)
						.then((response) => {
							this.subreddits = this.subreddits.concat(response.data.data.children)
							let count = this.subreddits.length 
							this.lastID = this.subreddits[count - 1].kind +'_'+ this.subreddits[count - 1].data.id
						})
						.catch((error) => {
							this.toastMessage = '网络错误，数据获取失败'
							this.showToast()
						});
			},
			loadMore() {
				console.log('Loading')
				this.loading = true
				setTimeout(() => {
					this.getMoreData()
					this.loading = false
				}, 2000)
			},
			showToast() {
			    this.toast = true
			    if (this.toastTimer) clearTimeout(this.toastTimer)
			    this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    		},
    		hideToast() {
      			this.toast = false
      			if (this.toastTimer) clearTimeout(this.toastTimer)
      			this.toastMessage = ''
    		}
		}
	}
</script>

<style scoped>

	.container {
		max-width: 600px;
		background: #ffffff;
		box-shadow: 0 0 3px #cccccc;
	}


	.subreddits h2 {
		font-size: 20px;
		margin-bottom: 10px;
		margin-top: 0px;
		padding-top: 9px;
		max-width: 50px;
	}

	.subreddits .item-list {
		border-top: 1px solid #cccccc;
		padding-top: 15px;
		padding-left: 0px;
		list-style: none;
	}

	.item-list ul {
		list-style-type: none;
		padding: 0px 6px 6px 8px;
	}

	.subreddits .item-list li {
		margin-bottom: 20px;
		margin-top: 10px;
	}

	.grid h2 {
		margin: 5px auto;
	}

	.mu-text-field {
		margin-top: 9px;
	}

</style>