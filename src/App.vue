<template>
  <div id="app">
    <tag-list @close="close" :list="list1" />
    <tag-list @close="close" :list="list2" sizeType="medium" />
    <tag-list @close="close" :list="list3" sizeType="large" />
  </div>
</template>

<script>
import TagList from './views/tagList.vue';
export default {
  components:{
    TagList,
  },
  data(){
    return {
      list1: [
        {
          image: 'https://img01.sldlcdn.com/G1/M00/00/22/oYYBAF_9OpWIOE3BAAAAPB2f6hYAAAP0gMQPRIAAAEA115.png?w=185&h=45',
          type: 0
        },
        {text: '粉底红字标签', type: 1, closeable: true},
        {text: '红底白字标签', type: 2},
        {text: '白底空心红字标签', type: 3, plain: true},
      ],
      list2: [
        {
          image: 'https://img01.sldlcdn.com/G1/M00/00/22/oYYBAF_9OpWIOE3BAAAAPB2f6hYAAAP0gMQPRIAAAEA115.png?w=185&h=45',
          type: 0
        },
        {text: '粉底红字标签', type: 1},
        {text: '红底白字标签', type: 2, closeable: true},
        {text: '白底空心红字标签', type: 3, plain: true},
      ],
      list3: [
        {
          image: 'https://img01.sldlcdn.com/G1/M00/00/22/oYYBAF_9OpWIOE3BAAAAPB2f6hYAAAP0gMQPRIAAAEA115.png?w=185&h=45',
          type: 0
        },
        {text: '粉底红字标签', type: 1},
        {text: '红底白字标签', type: 2},
        {text: '白底空心红字标签', type: 3, plain: true},
      ],
    };
  },
  methods:{
    close(key, list){
      list.splice(key,1);
    },
  },
}
</script>

