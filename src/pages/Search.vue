<template>
    <div class="gifs">
        <mu-appbar class="app-bar">
            <mu-icon-button @click="toggleSideBar" icon="menu" slot="left"/>
            <mu-text-field class="appbar-search-field"  slot="left" hintText="/subreddit/"/>
        </mu-appbar>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

    export default {
        name: 'search',
        components: {
            
        },
        data () {
            return {
                
            }
        },
        methods: {
            ...mapMutations([
                'toggleSideBar'
            ])            
        }
    }
</script>

<style lang="scss" scoped>

.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}

</style>