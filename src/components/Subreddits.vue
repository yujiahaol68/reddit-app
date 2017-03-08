<template>
	<div class="subreddits container">
		<mu-toast v-if="toast" :message="toastMessage" @close="hideToast"/>
		<div class="grid">
		<mu-row gutter>	
				<mu-dropDown-menu :value="category" @change="categoryChange" v-bind:auto-width="true">
					<mu-menu-item v-for="category in categories" :value="category" :title="capitalize(category)"/>
				</mu-dropDown-menu>    		
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
require('../assets/sass/subreddits.scss')

import Subreddit from './Subreddit' 	//subreddit list item component
import axios from 'axios' 	//recommend plugin for ajax request

import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

	export default {
		name: 'subreddits',
		props: ['refreshState'],
		data() {
			return {
				subreddits: [],
				lastID: '',
				pageLimit: 25,
				currentSort: 'Top',
				sortOption: ['Top', 'Hot', 'New', 'Rising'],
				category: 'all',
				categories: ['all', 'food', 'space', 'movies', 'funny', 'news'],
				toast: false,
				toastMessage: ''				
			}
		},
		computed: {
			loading () {
				return this.$store.state.infiniteScrollEnable
			},
			scroller () {
				if(this.$route.name === 'home')
				{
					return this.$store.state.scroller
				} else {
					return null
				}
			}
		},
		mounted() {
			
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
		created() {
			this.getData()
		},
		methods: {
			categoryChange(newVal) {
				this.category = newVal
				console.log(this.category)
			},
			capitalize: function(val) {
				if(!val) return '';
				val = val.toString();
				return val.charAt(0).toUpperCase() + val.slice(1);
			},
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
				this.$store.state.infiniteScrollEnable = true
				setTimeout(() => {
					this.getMoreData()
					this.$store.state.infiniteScrollEnable = false
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