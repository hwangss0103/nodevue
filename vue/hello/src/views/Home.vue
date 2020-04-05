<template>
  <div class="home">
    <ul>
      <li v-for="reply in replies" v-bind:key="reply.rno">
        {{reply.rno}}. <input type="text" v-model="reply.replytext">
        <button @click.prevent="saveReply(reply)">Update</button>
      </li>
    </ul>
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="text" id="msg" v-model="msg">
    <button :disabled="isButtonDisabled" @click="isButtonDisabled = !isButtonDisabled">Disable</button>
    <TodoItem v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
    <div :class="{red: isButtonDisabled}">red</div>
    <HelloWorld v-if="isButtonDisabled" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TodoItem
  },
  created() {
    this.fetchReplies();
  },
  computed: {
  },
  watch: {
    msg: function() {
      console.log('지켜보고 있다');
    } 
  },
  methods: {
    saveReply(reply) {
      this.$http.put('http://localhost:7000/apis/replies/265/' + reply.rno, reply).then(
        res => {
          console.log(' saveReply.ret >> ', res);
          if (res.status !== 200) {
            return [];
          }
          alert(res.data + '개의 댓글이 수정되었습니다');
        }
      )
    },

    fetchReplies() {
      this.$http.get('http://localhost:7000/apis/replies/265').then(
        res => {
          if (res.status !== 200) {
            return [];
          }
          this.replies = res.data;
          console.log('왔나', this.replies);
        }
      )
    },
    
  },
  data() {
    return {
      msg: 'abcd',
      replies: [],
      isButtonDisabled: false,
      groceryList: [
        {id: 0, text: 'Vegitablse'},
        {id: 1, text: 'Cheases'},
        {id: 2, text: 'whatElse?'}
      ]
    }
  },
  
}
</script>

<style scoped>
 .red {
   background-color: red;
 }
</style>
