<template>
  <div>
  <router-link to='/box'><a>page1</a></router-link>
  <router-link to='/for'><a>page2</a></router-link>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'goPage'
}
</script>

<style scoped>

</style>
