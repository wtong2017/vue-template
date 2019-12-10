<template>
    <div>
        <div>Todo List</div>
        <input type="text" v-model="todo">
        <button @click="addItem">Add</button>
        <ul v-for="(todo, i) in todos" :key="i">
            <li>{{ todo }}<button @click="removeItem(i)">Delete</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: '',
            todos: ['hello', 'world']
        }
    },
    methods: {
        addItem() {
            if (this.todo.length > 0) {
                this.todos.push(this.todo)
                this.todo = ''
            }
        },
        removeItem(i) {
            this.todos.splice(i, 1)
        }
    }
}
</script>