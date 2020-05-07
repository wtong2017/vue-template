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
    </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue';
export default {
    setup() {
        const state = reactive({
            todo: '',
            todos: ['hello', 'world']
        });

        function addItem() {
            if (state.todo.length > 0) {
                state.todos.push(state.todo)
                state.todo = ''
            }
        }

        function removeItem(i: number) {
            state.todos.splice(i, 1)
        }

        return {
            ...toRefs(state),
            addItem,
            removeItem
        };
    }
}
</script>