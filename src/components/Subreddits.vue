<template>
	<div class="subreddits container">
		<h2>{{category | capitalize}}</h2>
		<ul class="item-list">
			<ul v-for="post in subreddits"><li><subreddit :item="post"></subreddit></li></ul>
		</ul>
		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loading-text="Loading..."/>
	</div>
</template>

<script>
import Subreddit from './Subreddit'

	export default {
		name: 'subreddits',
		props: ['category'],
		data() {
			return {
				subreddits: [],
				lastID: '',
				loading: false,
				scroller: null,
				pageLimit: 25
			}
		},
		mounted() {
			this.scroller = window
		},
		watch: {
			category: function(newVal){
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
				this.$http.get('https://www.reddit.com/r/' + this.category + '/top.json?limit=' + this.pageLimit)
					.then((response) => {
						this.subreddits = response.data.data.children
						this.lastID = this.subreddits[this.pageLimit - 1].kind +'_'+ this.subreddits[this.pageLimit - 1].data.id
						console.log(this.lastID)
					});
			},
			getMoreData() {
				this.$http.get('https://www.reddit.com/r/' + this.category + '/top.json?limit=' + this.pageLimit + '&after=' + this.lastID)
						.then((response) => {
							this.subreddits = this.subreddits.concat(response.data.data.children)
							let count = this.subreddits.length 
							this.lastID = this.subreddits[count - 1].kind +'_'+ this.subreddits[count - 1].data.id
						});
			},
			loadMore() {
				console.log('Loading')
				this.loading = true
				setTimeout(() => {
					this.getMoreData()
					this.loading = false
				}, 2000)
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 100%;
		background: #ffffff;
		box-shadow: 0 0 3px #cccccc;
	}

	.subreddits {
		width: 100%;
	}

	.subreddits h2 {
		font-size: 20px;
		margin-bottom: 10px;
		margin-top: 0px;
		padding-top: 9px;
		text-align: center;
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
	}

	div {
		display: block;
	}

</style>