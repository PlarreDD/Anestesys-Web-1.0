import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleQuestion, faCircleInfo, faAngleUp, faEllipsis, faPenToSquare, faTrash, faEye, faEyeSlash, faMicrophone, faXmark, faSquarePlus } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleQuestion, faCircleInfo, faAngleUp, faEllipsis, faPenToSquare, faTrash , faEye, faEyeSlash, faMicrophone, faXmark, faSquarePlus)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .use(ElementPlus)    
    .mount('#app');
