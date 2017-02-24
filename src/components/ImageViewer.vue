<template>
    <div class="image-viewer" @click="closeViewer">
        <img :src="sourceUrl">
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

    export default {
        name: 'imageviewer',
        data () {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
              'sourceUrl'  
            ])
        },
        methods: {
            ...mapMutations([
                
            ]),
            closeViewer () {
                console.log('Exit Viewer!')
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

.image-viewer {
    background-color: black;
    line-height: 600px;
    overflow-y: hidden;
}

.image-viewer img {
    line-height: 600px;
    vertical-align: middle;
    width: 100%;
}

</style>