<template>
    <div class="image-viewer" @click="closeViewer">
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
            if (this.sourceUrl.length !== 0)
            {
                this.delayLoading()
            } else {
                console.log('imgURL is empty!')
                this.$router.go(-1)
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
                this.isLoading = true
                this.$router.push({ name: 'home' })
            },
            delayLoading () {
                setTimeout(() => {
                    this.isLoading = false
                } , 800)
            }
        }
    }
</script>

<style lang="scss" scoped>

$line-height: 600px;
$loading-img-max-width: 48px;


.image-viewer {
    background-color: black;
    line-height: $line-height;
    text-align: center;
}

.showed-img {
    line-height: $line-height;
    vertical-align: middle;
    width: 100%;
}

.transition-img {
    max-width: loading-img-max-width;
}

</style>