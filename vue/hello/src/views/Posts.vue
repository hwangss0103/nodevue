<template>
    <div>
        <h1>This is Posts!!</h1>
        <ul>
            <li v-for="post in posts" v-bind:key="post.id">
                {{post.id}}.
                <!-- 간단하게 url 형태로 부를때 -->
                <router-link :to="'/posts/post/' + post.id">{{post.id}} {{post.title}}</router-link>
                <!-- 이렇게 보내는게 정석이다(name은 router에 등록한 child name) -->
                <!-- <router-link :to="{name: 'post', params: {id: post.id}}"> {{post.id}} {{post.title}}</router-link> -->
            </li>
            <router-view/>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: [
                    {id: 390, title: '번 글입니다.'},
                    {id: 391, title: '번 글입니다.'},
                    {id: 392, title: '번 글입니다.'},
                    {id: 393, title: '번 글입니다.'},
                    {id: 394, title: '번 글입니다.'}
                ]
            }
        }
    }
</script>