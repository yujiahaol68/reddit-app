<template>
	<div class="subreddit">
		<router-link v-lazy:background-image="makeImage(item.data.thumbnail)" target="_self" class="thumbnail" tag="div" to="viewer" @click.native="sendImgData(item.data.url)"></router-link>
		<div class="details">
		<a :href="makeUrl(item.data.permalink)" :title="item.data.title" target="_self" class="title">
			{{item.data.title | truncate}}
		</a>
		<br />
			<div class="stats">
				<i class="iconfont icon-good"></i>
				{{item.data.score}}
				<i class="iconfont icon-comment"></i>
				{{item.data.num_comments}}
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'subreddit',
		props: ['item'],
		data() {
			return {

			}
		},
		methods: {
			makeImage: function(img) {
				return img
			},
			makeUrl: function(permalink) {
				return 'http://reddit.com' + permalink;
			},
			hasImgLink: function(link) {
				let linkArray = link.split('.')
				return linkArray[linkArray.length - 1] === 'jpg'
			},
			sendImgData: function(imgUrl) {
				console.log(imgUrl)
				if(this.hasImgLink(imgUrl))
				{
					console.log('hasImage')
					this.$store.state.imageUrl = imgUrl
				} else {
					console.log('OnlyThumbnail')
					console.log(this.item.data.thumbnail)
					this.$store.state.imageUrl = this.item.data.thumbnail
				}
				console.log('commitURL!')
			}
		},
		filters: {
			truncate: function(val) {
				let length = 70
				if(val.length <= length) {
					return val
				} else {
					return val.substring(0, length-3) + '...'
				}
			}
		}
	}
</script>

<style scoped>
	.subreddit {
		display: flex;
	}

	.subreddit .thumbnail {
		display: block;
		flex: 0 0 65px;
		height: 65px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin-right: 12px;
		border-radius: 3px;
	}

	.subreddit .details .title {
		font-size: 15px;
		margin-bottom: 5px;
		color: black;
	}

	.subreddit .stats {
		font-size: 14px;
		margin-right: 4px;
		margin-top: 7px;
		display: inline-block;
		color: #666666;
	}

	.subreddit .stats i {
		margin-right: 2px;
	}
</style>