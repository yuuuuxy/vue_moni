<template>
  <div>
    <ul>
      <li v-for="(item,index) in navidata" :key='index'>
        <a>{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    data() {
      return {
        navidata: []
      }
    },
    getRemoteNav: function() {
      console.log('get...')
      this.navidata = [
        {
          title: 'why github',
          href: './'
        },
        {
          title: 'team',
          href: './'
        },
        {
          title: 'enterprise',
          href: './'
        }
      ]
    }
  },
  created: function() {
    this.getRemoteNav()
  }
}
</script>
<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  cursor: pointer;
  margin-right: 16px;
}
li:hover {
  color: hsla(0, 0%, 100%, 0.75);
}
</style>