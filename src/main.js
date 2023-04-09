import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import {
    createPinia
} from 'pinia'

import {
    aliases,
    mdi
} from 'vuetify/iconsets/mdi'

// Vuetify
import 'vuetify/styles'
import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';



const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)


app.mount('#app')