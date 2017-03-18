<template>
    <div class="gifs">
        <mu-appbar title="GIFs" class="app-bar">
            <mu-icon-button @click="toggleSideBar" icon="menu" slot="left"/>
        </mu-appbar>
        <div class="container">
            
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

    export default {
        name: 'gifs',
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

.container {
    padding-top: 56px;
}
</style>