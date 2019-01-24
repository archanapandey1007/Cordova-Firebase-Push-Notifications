// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

document.addEventListener('deviceready', onDeviceReady, false)
function onDeviceReady () {
  FCMPlugin.onNotification(function (data) {
    if (data.wasTapped) {
      alert('title : ' + data.title + ',' + 'body : ' + data.body)
    } else {
      alert(JSON.stringify(data))
    }
  })
}

// If we are not in Cordova, manually trigger the deviceready event
const isCordovaApp = (typeof window.cordova !== 'undefined')
if (!isCordovaApp) {
  document.dispatchEvent(new CustomEvent('deviceready', {}))
}
