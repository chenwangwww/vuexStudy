<template>
  <div class="home">
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
        v-on:click="currentTab = tab"
      >
        {{ tab.name }}
      </button>

      <component v-bind:is="currentTab.component" class="tab"></component>
    </div>
  </div>
</template>

<script>
var tabs = [
        {
          name: "Home",
          component: {
            template: "<div>Home component</div>"
          }
        },
        {
          name: "Posts",
          component: {
            template: "<div>Posts component</div>"
          }
        },
        {
          name: "Archive",
          component: {
            template: "<div>Archive component</div>"
          }
        }
      ];

export default {
  name: 'Home',
  data(){
    return {
      tabs: tabs,
          currentTab: tabs[0]
    }    
  },
  methods: {
    changeView: function(data){
      this.currentView = 'com' + data;
    }
  },
  components: {
    // comA: {
    // template: '<p>组件A</p>'
    // },
    // comB: {
    // template: '<p>组件B</p>'
    // },
    // comC: {
    // template: '<p>组件C</p>'
    // }
  },
  computed: {
    count(){
      return this.$store.state.count;
    }
  },
  mounted(){
    
  }
}
</script>

<style>
      .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
      }
      .tab-button:hover {
        background: #e0e0e0;
      }
      .tab-button.active {
        background: #e0e0e0;
      }
      .tab {
        border: 1px solid #ccc;
        padding: 10px;
      }
    </style>
