import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const token = ref("tknGlobal");
    const expiresIn = ref("");

    return {
        token,
        expiresIn,
    };
});