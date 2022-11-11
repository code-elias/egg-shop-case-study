import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/app.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faTwitter, faInstagram)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
