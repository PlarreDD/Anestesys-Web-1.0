<template>
    <button type="submit" class="btn btn-primary">SALIR</button>
</template>

<script lang="ts">
import { apiAxios } from '@/boot/axios';
import type { regUsr } from '@/interfaces/regUsr';

export default {
    data() {
        return{
            usr: { } as regUsr
        };
    },

    methods: {
        handleSubmit() {
            apiAxios.post("http://localhost:5000/logout", {
                email: this.usr.email,
                password: this.usr.pswd,
            }).then((res:any) => {
                console.log(res.data);
            }).catch((e:any) =>
                console.log(e));
        }
    }
}
</script>