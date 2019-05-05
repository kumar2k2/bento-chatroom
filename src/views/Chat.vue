<template>
  <div class="page-wrapper">
    <h1 class="products-page-title">Chat</h1>
    <div v-if="!username">
      What's your name? <br />
          <input type="text" placeholder="Name" v-on:keyup.enter="updateUsername">
    </div>
    <div v-else>
        From : {{username}}<br />
        Message:<br />
    <textarea name="" id="" cols="30" rows="10" placeholder="New Message" v-on:keyup.enter="sendMessage"></textarea>
    <hr>
    <div class="messages">
        <h3>Messages</h3>
        <div class="message" v-for="message in messages" :key="message.id">
            <strong>{{message.username}}</strong>
            <p>{{message.text}}</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {  name: 'home',
  data () {
    return {
      title: 'Home',
      username: '',
      messages: []
    }
  },
  methods: {
    updateUsername (e) {
      e.preventDefault()
      if (e.target.value) {
        this.username = e.target.value
      }
    },
    sendMessage (e) {
      console.log('sendMessage', e)
      e.preventDefault()
      if (e.target.value) {
        const message = {
          username: this.username,
          text: e.target.value
        }
        // Push message to firebase reference
        fire.database().ref('messages').push(message)
      }
    }
  },
  mounted () {
    let vm = this
    const itemsRef = fire.database().ref('messages')
    itemsRef.on('value', snapshot => {
      let data = snapshot.val()
      let messages = []
      Object.keys(data).forEach(key => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text
        })
      })
      vm.messages = messages
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.products-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.product-list {
  margin: 20px 0;
}
</style>
