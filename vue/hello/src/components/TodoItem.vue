<template>
    <div>
        <li>ttt: {{todo.text}}</li>
    </div>
</template>

<script>
export default {
    name: 'todo-item',
    props: {
        todo: {
            type: Object,
            default() {
                return {id: 'deviceId', text: 'defalut text'};
            },
            required: true
        }
    }
}
</script>