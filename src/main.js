import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Swipe, SwipeItem, CountDown, Tab, Tabs } from 'vant'
import 'vant/lib/index.css'
const app = createApp(App)
app.use(Button).use(Swipe).use(SwipeItem).use(CountDown).use(Tab).use(Tabs)
app.use(store).use(router).mount('#app')
