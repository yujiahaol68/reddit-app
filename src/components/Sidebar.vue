<template>
    <div class="sidebar">
        <mu-drawer :open="openState" :docked="docked" @close="sideBarClose()">
            <mu-list @itemClick="docked ? '' : toggle()" class="menu-list">
                <mu-list-item title="Home">
                    <mu-icon slot="left" value="home"/>
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="GIFs">
                    <mu-icon slot="left" value="videocam"/>
                </mu-list-item>
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

</style>