<template>
    <div class="sidebar">
        <mu-drawer :open="openState" :docked="docked" @close="sideBarClose()">
            <mu-list class="menu-list">
                <router-link :to="{ name: 'home' }" tag="div" active-class="active-item" exact>
                    <a>
                    <mu-list-item title="Home" @click="sideBarClose()">
                        <mu-icon slot="left" value="home"/>
                    </mu-list-item>
                    </a>
                </router-link>
               
                <router-link :to="{ name: 'gifs' }" tag="div" active-class="active-item">
                    <a>
                    <mu-list-item title="GIFs" @click="sideBarClose()">
                        <mu-icon slot="left" value="videocam"/>
                    </mu-list-item>
                    </a>
                </router-link>
                
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

    export default {
        name: 'sidebar',
        components: {

        },
        data () {
            return {
                docked: false
            }
        },
        methods: {
            ...mapMutations([
                'sideBarClose'
            ])
        },
        computed: {
            ...mapGetters([
                'openState'
            ])
        }
    }
    
</script>

<style scoped>

.menu-list {
    padding-top: 100px;
}

.active-item {
    border-left: solid 2px #00ADF4;
}

</style>