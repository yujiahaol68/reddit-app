<template>
	<div class="subreddit">
		<router-link v-lazy:background-image="makeImage(item.data.thumbnail)" class="thumbnail" tag="div" :to="{ name: 'imageViewer' }" @click.native="sendImgData(item.data.url)"></router-link>
		<div class="details">
		<router-link :to="{ name: 'subdetail', params: { id: item.data.name } }" @click.native="sendID(item.data.name)" class="title">
			{{item.data.title | truncate}}
		</router-link>
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
				if (this.hasImgLink(imgUrl))
				{
					console.log('hasImage')
					this.$store.dispatch('passURL', imgUrl)
				} else {
					console.log('OnlyThumbnail')
					console.log(this.item.data.thumbnail)
					this.$store.dispatch('passURL', this.item.data.thumbnail)
				}
				console.log('commitURL!')
			},
			sendID: function(id) {
				console.log('ID sent!')
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

<style lang="scss" scoped>
@import '../assets/sass/subreddit';
</style>