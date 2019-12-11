<template>
  <div>
    <h1>Hello World!</h1>
    <Todo></Todo>
  </div>
</template>

<script lang='ts'>
import Todo from './components/Todo.vue'

export default {
    components: {
        Todo,
    }
}
</script>