<template>
  <div>
    <div>Todo List</div>
    <input type="text" v-model="todo" />
    <button @click="addItem">Add</button>
    <ul v-for="(todo, i) in todos" :key="i">
      <li>
        {{ todo }}
        <button @click="removeItem(i)">Delete</button>
      </li>
    </ul>
    <div>Total number of items added: {{count}}</div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const state = reactive({
      todo: "",
      todos: ["hello", "world"]
    });

    const count = computed(() => store.state.count);

    function addItem() {
      if (state.todo.length > 0) {
        state.todos.push(state.todo);
        state.todo = "";
      }
      store.commit("increment");
    }

    function removeItem(i: number) {
      state.todos.splice(i, 1);
    }

    return {
      ...toRefs(state),
      addItem,
      removeItem,
      count
    };
  }
};
</script>