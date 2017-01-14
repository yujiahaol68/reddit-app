<template>
	<div class="subreddit">
		<a :href="makeUrl(item.data.permalink)" :style="makeImage(item.data.thumbnail)" target="_self" class="thumbnail"></a>
		<div class="details">
		<a :href="makeUrl(item.data.permalink)" :title="item.data.title" target="_self" class="title">
			{{item.data.title | truncate}}
		</a>
		<br />
			<div class="stats">
				<i class="material-icons">thumbs_up_down</i>
				{{item.data.score}}
				<i class="material-icons">forum</i>
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
				return 'background-image: url('+ img + ')';
			},
			makeUrl: function(permalink) {
				return 'http://reddit.com' + permalink;
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
		color: steelblue;
	}

	.subreddit .stats {
		font-size: 12px;
		margin-right: 4px;
		margin-top: 7px;
		display: inline-block;
		color: #666666;
	}

	.subreddit .stats i {
		font-size: 10px;
		margin-right: 2px;
	}
</style>