<template>
    <div class="flex-container">
        <div
            v-for="(item, key) in list"
            :key="key" 
        >
            <img 
                :class="listStyle" 
                v-if="item.type==0" 
                :src="item.image" 
                alt="" 
            />
            <van-tag v-else  
                :plain="sty({type:item.plain, tag:'plain'})" 
                :closeable="sty({type:item.closeable, tag:'closeable'})" 
                :size="sizeType" 
                @close="close(key)"
                :color="sty({type:item.type, tag:'color'})"
                :text-color="sty({type:item.type, tag:'text-color'})"
            >
                {{item.text}}
            </van-tag>
        </div>
    </div>

    
</template>

<script>
export default {
    props: {
        list: { type: Array, required: true },
        sizeType: '',
    },
    computed: {
        listStyle(){
            return this.sizeType;
        },
    },
    methods: {
        close(key) {
            this.$emit('close', key, this.list);
        },
        sty(conf){
            let {type, tag} = conf;
            let res = '';
            if(tag == 'plain'){
                return type;
            }else if(tag == 'closeable'){
                return type;
            }else if(tag == 'color'){
                switch (type) {
                    case 1:
                        res = '#ffc0cb';
                        break;      
                    case 2:
                        res = '#ff0000';
                        break;
                    case 3:
                        res = '#ffffff';
                        break;
                    default:
                        break;
                }   
            }else if(tag == 'text-color'){
                switch (type) {
                    case 1:
                        res = '#ff0000';
                        break;      
                    case 2:
                        res = '#ffffff';
                        break;
                    case 3:
                        res = '#ff0000';
                        break;
                    default:
                        break;
                }   
            }
            
            return res;
        },
    },
}
</script>

<style lang="less">
.flex-container{
    display: flex;
    margin-bottom: 10px;
    align-items: flex-start;

    > div{
        display: inline-block;
        margin-right: 10px;

        .medium{
            height: 20px;
        }
        .large{
            height: 25px;
        }
        img{
            height: 16px;
            display: block;
        }
        span{
            display: block;
        }
    }
}
</style>