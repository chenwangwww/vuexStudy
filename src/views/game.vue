<template>
    <div
        style="margin: auto;width: 100%;height: 100%;"
                class="egret-player"
                data-entry-class="Main"
                data-orientation="portrait"
                data-scale-mode="fixedNarrow"
                data-frame-rate="60"
                data-content-width="750"
                data-content-height="1206"
                data-multi-fingered="2"
                data-show-fps="false"
                data-show-log="false"
                data-show-fps-style="x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9"
    >
    </div>
</template>

<script>
import gameImporter from '@/plugins/game-importer'
export default {
    name: 'game',
    props:{
        reload: false,
    },
    mounted(){
        // gameImporter();
        // window.location.reload();
        window.a && (()=>{
            window.a = false;
            window.location.reload();
        })()
    }
}
</script>