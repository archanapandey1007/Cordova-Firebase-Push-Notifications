import axios from 'axios'

const BASE_URL = '/fcm.googleapis.com/'
const API = 'fcm/'
const key = 'AAAAuDAPKis:APA91bGtT1rHOlXWKDK0l86SxanUHnPUcGJcrVZfmjTxLUKYGY6eWfU1L9aupshnjhc6p1EfhCgW3y_3abID0WTNzqmx9bPwztmNAwjoOD2BvofocXOrztKQ_mTd2rmi0KxXp-XAdOXq'

export default {
  initializeAxios(baseUrl) {
    return axios.create({
      baseURL: 'http://' + baseUrl,
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'key=' + key
      },
      timeout: false,
      params: {} // do not remove this, its added to add params later in the config
    })
  },
  postData (action, data) {
    let instance = this.initializeAxios(BASE_URL)
    let url = `${API}`
    url += action
    return instance.post(url, data)
  }
}
