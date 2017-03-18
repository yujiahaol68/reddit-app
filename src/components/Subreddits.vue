<template>
	<div class="subreddits container">
		<div class="grid">
		<mu-row gutter>	
				<mu-dropDown-menu :value="category" @change="categoryChange" v-bind:auto-width="true">
					<mu-menu-item v-for="category in categories" :value="category" :title="capitalize(category)"/>
				</mu-dropDown-menu>    		
    		<mu-col width="30" tablet="50" desktop="60">
    			<mu-dropDown-menu :value="sortWay" @change="sortChange" v-bind:auto-width="true">
					<mu-menu-item v-for="sort in sortOption" :value="sort" :title="capitalize(sort)"/>
				</mu-dropDown-menu>
    		</mu-col>
  		</mu-row>
  		</div>
		
		<ul class="item-list">

			<ul v-for="post in subreddits">
				<li>
				<subreddit :item="post"></subreddit>
				</li>
				<mu-divider shallowInset/>
			</ul>

		</ul>

		<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loading-text="Loading..."/>

	</div>
</template>

<script>
require('../assets/sass/subreddits.scss')

import Subreddit from './Subreddit' 	//subreddit list item component

import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

	export default {
		name: 'subreddits',
		data() {
			return {
				
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
			},
			...mapGetters({
				subreddits: 'getSubreddits',
				categories: 'getCategories',
				category: 'getCategory',
				sortOption: 'getSortOption',
				sortWay: 'getSort'
			})
		},
		watch: {
			refreshState: function(newVal){
				this.$store.dispatch('getListData')
			}
		},
		components: {
			Subreddit
		},
		created() {
			this.$store.dispatch('getListData')
		},
		methods: {
			categoryChange(newVal) {
				console.log(newVal)
				this.$store.commit('CATEGORY_CHANGE', newVal)
				this.$store.dispatch('getListData')
			},
			sortChange(newVal) {
				console.log(newVal)
				this.$store.commit('SORTWAY_CHANGE', newVal)
				this.$store.dispatch('getListData')
			},
			capitalize: function(val) {
				if(!val) return '';
				val = val.toString();
				return val.charAt(0).toUpperCase() + val.slice(1);
			},
			loadMore() {
				console.log('Loading')
				this.$store.state.infiniteScrollEnable = true
				setTimeout(() => {
					this.$store.dispatch('getMoreListData')
					this.$store.state.infiniteScrollEnable = false
				}, 2000)
			}
		}
	}
</script>