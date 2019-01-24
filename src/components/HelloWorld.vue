<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <span>Title:</span>
      <input v-model="title">
    </div>

    <br/>

    <div>
      <span>Body:</span>
      <textarea  v-model="body"></textarea>
    </div>

    <br/>

     <div>
       <button @click="sendNotification()">Send</button>
     </div>

  </div>
</template>

<script>
import fcmApi from '@/utils/fcm-server-api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Send Firebase Push Notifications',
      title: '',
      body: ''
    }
  },
  methods: {
    sendNotification () {
      let notificationObj = {
        'notification': {
          'title': this.title,
          'body': this.body,
          'sound': 'default',
          'click_action': 'FCM_PLUGIN_ACTIVITY',
          'icon': 'fcm_push_icon'
        },
        'data': {
          'title': this.title,
          'body': this.body
        },
        'to': '/topics/android',
        'priority': 'high',
        'restricted_package_name': 'in.aquariansoft.epanditji'
      }
      return new Promise((resolve, reject) => {
        fcmApi.postData('send', notificationObj).then(res => {
          resolve(res)
          this.title = ''
          this.body = ''
          alert('msg successfully sent')
        })
          .catch(err => {
            if (!err.response) {
              alert('error')
            } else {
              alert('error' + err)
            }
            reject(err)
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
