<template>
    <div class="image-viewer">
        <img v-if="isLoading" src="http://ojt3x01ru.bkt.clouddn.com/image/loading/circleLoading.svg" class="transition-img"></img>
        <img v-else :src="sourceUrl" class="showed-img">
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
            this.showPic()
        },
        computed: {
            ...mapGetters([
              'sourceUrl'  
            ])
        },
        watch: {
            '$route': 'closeViewer'
        },
        methods: {
            closeViewer () {
                console.log('Exit Viewer!')
                this.isLoading = true
            },
            delayLoading () {
                setTimeout(() => {
                    this.isLoading = false
                } , 800)
            },
            showPic () {
                if (this.sourceUrl.length !== 0)
                {
                    this.delayLoading()
                } else {
                    console.log('imgURL is empty!')
                    this.isLoading = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/sass/img-viewer.scss';
</style>