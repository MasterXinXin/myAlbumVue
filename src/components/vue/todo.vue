<template>
  <li>
    {{ title }}
    <button v-on:click="$emit('remove')">Remove</button>
  </li>
</template>

<script>
export default {
  name: 'todo',
  props: ['title']
}
</script>

<style scoped>

</style>
