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
import { faCircleQuestion, faCircleInfo, faCircleCheck, faAngleUp, faEllipsis, faPenToSquare, faTrash, faEye, faEyeSlash,
    faMicrophone, faXmark, faSquarePlus, faAngleLeft, faAngleRight, faFilePdf, faArrowRight, faCircleXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import log from 'loglevel';

library.add(faCircleQuestion, faCircleInfo, faCircleCheck, faAngleUp, faEllipsis, faPenToSquare, faTrash , faEye, faEyeSlash, 
    faMicrophone, faXmark, faSquarePlus, faAngleLeft, faAngleRight, faFilePdf, faArrowRight, faCircleXmark, faArrowLeft)

log.setLevel(process.env.NODE_ENV === 'production' ? log.levels.ERROR : log.levels.DEBUG);

// Agrega log a la instancia de Vue para accederlo globalmente
declare global {
    interface Window {
      log: any;
    }
  }

window.log = log;

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(createPinia())
    .use(router)
    .use(ElementPlus)    
    .mount('#app');
