<template>
    <div class="image-viewer" @click="closeViewer">
        <img v-if="isLoading" src="http://ojt3x01ru.bkt.clouddn.com/image/loading/circleLoading.svg" style="max-width: 48px"></img>
        <img v-else :src="sourceUrl">
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

    export default {
        name: 'imageviewer',
        data () {
            return {
                isLoading: true
            }
        },
        activated () {
            this.delayLoading()
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
                this.isLoading = true
                this.$router.push('/')
            },
            delayLoading () {
                setTimeout(() => {
                    this.isLoading = false
                } , 800)
            }
        }
    }
</script>

<style scoped>

.image-viewer {
    background-color: black;
    line-height: 600px;
    text-align: center;
}

.image-viewer img {
    line-height: 600px;
    vertical-align: middle;
    width: 100%;
}

</style>