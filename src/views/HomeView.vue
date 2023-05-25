<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->

  <div id="app">
    <div
      v-for="(item, index) in list"
      :key="item.name"
      :class="item.value ? 'checked' : ''"
    >
      <input type="checkbox" @change="changeCheck(index)" />
      {{ item.name }}
    </div>
    <button @click="add">add</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    add() {
      this.list.push({
        name: Math.floor(Math.random() * 10000 + 1),
        value: false
      })
    },
    changeCheck(index) {
      this.list[index].value = !this.list[index].value
    }
  }
}
</script>

<style>
.checked {
  color: red;
}
</style>
