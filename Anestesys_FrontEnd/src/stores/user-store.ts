import { defineStore } from "pinia";
import { apiAxios } from '@/boot/axios';
import { ref } from "vue";
import router from "@/router";
import swal from 'sweetalert2';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: ref(null),
        expiresIn: ref(null),
        IdMed: ref(null),
        Nombre: ref(null),
        Apellido: ref(null),
        FechaNac: ref(null),
        Cedula: ref(null),
        Especialidad: ref(null),
        Correo: ref(null),
        Foto: ref(null)
    }),

    actions: {
        loginAccess(email: string, pswd:string){
            apiAxios.post("http://localhost:5000/login", {
                email: email,
                password: pswd,
            }).then((res:any) => {
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
                this.Nombre = res.data.Nombre;
                this.Apellido = res.data.Apellido;
                this.FechaNac = res.data.FechaNac
                this.Cedula = res.data.Cedula
                this.Especialidad = res.data.Especialidad
                this.Correo = res.data.Correo
                this.Foto = res.data.Foto
                this.IdMed = res.data.Id
                
                /* Mensaje de Bienvenida */
                swal.fire({
                    html: 'Bienvenido <b>Dr. ' + this.Nombre + ' ' + this.Apellido + '</b>',
                    icon: 'success',
                    showConfirmButton: false,
                    showCloseButton: true,  
                    timer: 5000,
                    timerProgressBar: true,
                    toast: true,
                    position: 'top-end'
                });

                /* Redirección a la pantalla de Preanestésico */
                router.push("/pre");
            }).catch((res:any) => {
                /* Fallo de inicio de sesión */
                swal.fire({
                    html: '<b>Usuario o contraseña inválidos</b>',
                    icon: 'error',
                    showConfirmButton: false,
                    showCloseButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                });
            });
        },

        refreshToken(){
            apiAxios.get("http://localhost:5000/refresh")
            .then((res:any) => {
                this.token = res.data.tkn;
                this.expiresIn = res.data.xprIn;
                this.setTime();
            }).catch((e:any) => {
            });
        },

        setTime(){
            setTimeout(() => {
                this.refreshToken();
            }, Number(this.expiresIn) * 1000 - 5000)
        },

        registerUsr(email: string, nomUsr: string, apUsr: string, fechaNac: string){
            const NombreDr = ref('');
            const ApPatDr = ref('');
            const FechaNac = ref('');
            var arr = [];
            const genPswd = ref('');

            /* Generación de contraseña */
            NombreDr.value = nomUsr.trim().toLowerCase();
            arr = Array.from(NombreDr.value);
            genPswd.value = arr[0];

            ApPatDr.value = apUsr.trim().toLowerCase();
            arr = Array.from(ApPatDr.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + arr[2] + arr[3] + '#';
            
            FechaNac.value = fechaNac;
            arr = Array.from(FechaNac.value);
            genPswd.value = genPswd.value + arr[0] + arr[1] + arr[2] + arr[3];

            let timerInterval;
            
            /* Comunicación a con la base de datos */
            apiAxios.post("http://localhost:5000/register", {
                email: email,
                password: String(genPswd.value),
                nomMed: nomUsr,
                apMed: apUsr,
                fechaNac: fechaNac,
                cedula: "",
                especialidad: "",
                foto: "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAKAAoADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0Oiiiv5KP6tCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA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EP8AX9zJGP7/AKr/ABdR833vmqv0QrwT46fAv+1PtHiTw5b/AOncyXlhEP8AX9zJGP7/AKr/ABdR833vynifhj2nNjsDHXeUV18159113Wu/6lw1xLycuBx0tNoyfTyfl2fTZ6bfNVFFFfkB+thRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFX/AA/od34m1qy0uxTfdXcqxJwSBnqxwCdoGSTjgAmqFfVX7Onwyi8OaDD4lut51TUoP3alhtigYgrjBOSwCsSenAwMHPv5JlU83xaoR0itZPsv83sjws6zSGU4R1payekV3f8Akt2ehfD3wPafD3wvbaRav5zJl5rgoFaaQ8ljj8hnJAAGTiukoor+kKNGnh6caNJWjFWS8kfzrWrTxFSVWq7yk7thRRRWxiFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFIRkYIyKWigD5S/aF+FVr4LvrfWtIi8nTL6RkktxgJBNjICc52sAxxjC7TzggDxyvv3xL4ftPFWg32k3y7ra7iMbEAErnoy5BAYHBBxwQK+HvGnhG98D+I7vSb6N1aFz5UjrtE0eTtkHJGCB6nByOoNfhPFmSrAYj61QjanPtspdvnuvmj9x4Vzn69Q+q15XqQ77td/ls/kzDooor4A+8CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDvfgv8PR8QvGEdvdRu2k2q+feMpZcjoqbgDgse2QdobByK+0lUKoA4A4FecfAfwH/wAIT4Ige5h8vVNQxc3O5cOgI+SM5UMNq9VOcMWx1r0iv6G4XytZbgIua9+er/RfJfi2fz/xNmbzHHNQfuQ0X6v5v8Egooor68+SCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8i/aP8BN4o8JDWLeR/tejI8vkjbteI7fMJyRgqF3D6EYJIx67TXUOrKehGK8/MMHTzDCzwtXaS+59H8nqd+AxlTL8TDE094v711XzWh+eNFdR8TPBh8A+Mr/AEdWmltoyr2806bTJGwBB9Dg5XI4JU9Og5ev5gr0Z4erKjUVpRbT9Uf0xRrQxFKNam7xkk16MKKKKxNgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACuw+Efhc+LviFo9i0fmWyyi4uMw+anlp8xDjptYgJk8fMOvQ8fX0b+yj4Xt/smr+IXO668z7DGuCNigK7Hrg7iV7cbOvJr38hwX9oZjSova936LV/fseDnmN+oZfVrLe1l6vRfdufQQGBgDApaKK/pY/nAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPCf2pvB7X2i2HiK3RN1i3kXJCKGMbkbSWzkhW4C4P8ArCeOa+Za+/PFOjnxD4a1XSxL5BvLWS38zbu27lIzjIz16Zr4GuLeW0uJIJ4nhmiYo8cilWRgcEEHoQe1fh3GuBWHxscVBaVFr6rT8rH7ZwZjniMFLDSetN6ej1/O4yiiivzs/QQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvuL4S6D/wjfw50GyKTRyfZlmljuBh0kk+d1IwMYZiMHkYr4s8P6X/bmvabpvm+R9suY7fzdu7ZvcLnGRnGema+/wCNfLjVc52jFfqvAmHvUr4lrZKK+er/ACR+Xcc4i1Ohh11bk/lovzY6iiiv2A/IwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+L/jx4f8A+Ee+J2rKlv8AZ7e8K3kXz7t+8fO3UkZkEnB/LGK+0K+Yv2r9I+z+JtF1Pzd32q1aDytv3fLbOc55z5vTHG33r4LjTDqrlntbawkn9+n6o+64NrulmXs76Ti192v6M8Mooor8HP3MKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDuPgjp9vqnxU8PQXMfmRCZpQuSPmSNnU8Hsyg/hX2xXyj+yz/yUa8/7Bsn/oyKvq6v3TgmkoZbKfWUn+CS/r1PxDjSq55jGHSMV+Lb/r0Ciiiv0E+BCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArxX9qz/kQ9M/7CSf8AoqWvaq83/aH/AOSR61/vQf8Ao5K8HPqftMrxEb/Zb+7X9D3MjqezzPDyt9pL79P1Pjeiiiv5oP6RCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA9i/ZY/wCSjXn/AGDZP/RkVfV1fKP7LH/JRrz/ALBsn/oyKvq6v3vgz/kVL/Ez8J4w/wCRo/8ACgooor7o+ICiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArzf9ob/kketf70H/AKPSvSK83/aG/wCSR61/vQf+j0rx85/5FuJ/wS/9JZ6+T/8AIxw/+OP/AKUj43ooor+Yj+lgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPYv2Wf+SjXn/YNk/8ARkVfV1fF/wAA/wDkrnh//em/9ESV9oV+7cE1OfLHG3wza/BP9T8P40p8mZKV/iin+LX6BRRRX358EFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXm/7Q3/JI9a/3oP8A0elekV4r+1Z/yIemf9hJP/RUteDn1T2eV4iVvstffp+p7mR0/aZnh43+0n92v6HyzRRRX80H9IhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABR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ivtD40KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGUMMEZHoaWigDzfx58B/DXjbzrlIP7J1R8t9rtAAHY7jl06NlmyTwxwBuFeAfET4Ea94CjN3H/AMTnS+c3NrG26IBdxaROdq/e+bJHy8kZAr7HpCMjBGRXyWZ8MZfmKcuXkm/tL9Vs/wA/M+ry3iXH5e1Hm54L7L/R7r8vI/PCivtH4jfBfQfiFEZnj/s7VBkrfWyKGc7doEgx86jC+h4wCMmvmv4hfBfxB8PVkuriNb7SVcKL63+6MsQu9eqk4HquWA3EmvyTNeGcdld5256a+0v1W6/LzP1fK+JMFmdoX5Kj+y/0fX8/I4Kiiivkj6sKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoorsfh38LNb+I14osYfJ05JRHcahJ/q4uMnAzlmx2HqucA5row+Hq4qoqNCLlJ7JGGIxFLC03WryUYrqzlbHT7rVLpLWytpru5kzshgjLu2AScKOTwCfwr6G+HP7MUSRC88XsZZDgpp1tKQoBXkSOMHcCeinA29WB49a8A/DfRvhzpj2mlxs8kr75rqfDSynnAJAHABwAAB17kk9TX7Jk3B9DDJVsf78/5fsr1/m/L13Px7OOLq2Jbo4H3Ifzfafp/L+foQ2lnBYW0VvbQx29vEoSOKJQqqoGAAB0AAqaiiv0hJJWR+dttu7CiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApGUMMEZHoaWigDx74jfs5aN4liN1oCw6FqIySiIfs83y4VSo4TkD5lHdiQTXy/rnh/UvDOoPY6pZTWN0uf3cy4yASNynoy5BwwyDjg1+gNYfirwTonjW0W31rTob1F+47AiSPkE7XGGXO0ZwecV+f51wlh8fethLU6n/kr9bbeqXqj73JuK6+BtSxd6lP/wAmXpff0b9D4Lor0r4qfBHVPh2Zb+Fv7Q0FpdqXC/6yIHG0SjGBydu4cEj+HIFea1+LYvB18DWdDER5ZL+rruj9lwmLoY6kq+HlzRf9a9mF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ZSq1FZhSXvQ0l5ro/k/wfkfpXBuaujWeAqv3Zax8n1XzX4rzPDKKKK/GD9jCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK6z4V+ER448daZpcqO1mz+bclUZgIlG4gkEFQ2Au7PBYfSt8PRniasKFP4pNJerMK9aGGpSrVPhim38j6U/Z38Ip4b+HtreSQeXfaoftUrttJKH/AFQBHO3bhsEnBZumcV6hSKoVQBwBwKWv6hwOFhgcNTw1PaKS9fP57n8zY3FTx2JqYme8nf08vlsFFFFdpxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWF448LweNPCupaPcHalzEQr4J2OOUbAIzhgDjPOMVu0VlVpwrU5UqivGSs15M1pVJ0akatN2lF3Xqj88ri3ltLiSCeJ4ZomKPHIpVkYHBBB6EHtTK9W/aO8Ht4c8evqEaIllqy+fH5aKgEigCQYB5OcMWIGS564Jrymv5ex+EngMVUw094u3y6P5rU/prA4uGOw1PEw2kr/Pqvk9AooorgO4KKKKACiiigAooooAKKKKACiiigAooooAKKKKACvoT9k/w/um1zXJLfhQlnBPv7/ekXbn/AK5HJH0718919q/BHw/F4e+GeiJHsZ7qEXkkixhCzSfMN3qQCFyeyjp0r7ng7B/WMzVV7U0389l+d/kfEcX4v6vlrpLeo0vlu/yt8zu6KKK/fD8JCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA8i/ab8Pxan8OzqJ2JPptxHIrGMFmVyIygbqoyysfXYPqPkyv0A8QaTFr2g6jps5kWG8t5IHMRAYKykHGQeefSvgK4t5bS4kgnieGaJijxyKVZGBwQQehB7V+J8cYT2WMp4lbTVn6x/wCA19x+z8E4v2mEqYZ7wd/k/wDgp/eMooor82P0YKKKKACiiigAooooAKKKKACiiigA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aX/yR9Cf8NcSf9Csv/gef/jdH/DXEn/QrL/4Hn/43Xz3RR/rVnP/AD//APJY/wDyIf6rZP8A8+P/ACaX/wAkfQn/AA1xJ/0Ky/8Agef/AI3R/wANcSf9Csv/AIHn/wCN1890Uf61Zz/z/wD/ACWP/wAiH+q2T/8APj/yaX/yR9Cf8NcSf9Csv/gef/jdH/DXEn/QrL/4Hn/43Xz3RR/rVnP/AD//APJY/wDyIf6rZP8A8+P/ACaX/wAkfQn/AA1xJ/0Ky/8Agef/AI3R/wANcSf9Csv/AIHn/wCN1890Uf61Zz/z/wD/ACWP/wAiH+q2T/8APj/yaX/yR9Cf8NcSf9Csv/gef/jdH/DXEn/QrL/4Hn/43Xz3RR/rVnP/AD//APJY/wDyIf6rZP8A8+P/ACaX/wAkfQn/AA1xJ/0Ky/8Agef/AI3R/wANcSf9Csv/AIHn/wCN1890Uf61Zz/z/wD/ACWP/wAiH+q2T/8APj/yaX/yR9Cf8NcSf9Csv/gef/jdH/DXEn/QrL/4Hn/43Xz3RR/rVnP/AD//APJY/wDyIf6rZP8A8+P/ACaX/wAkfQn/AA1xJ/0Ky/8Agef/AI3R/wANcSf9Csv/AIHn/wCN1890Uf61Zz/z/wD/ACWP/wAiH+q2T/8APj/yaX/yR9Cf8NcSf9Csv/gef/jdeT/E74gzfErxINVls47FUgW3jhRy5Cgk5LEDJyzdhxge55OiuDG55mOYUvY4mrzRve1kvySO7B5Jl+X1fbYalyy2vdv82wooorwj3AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q==",
                            })
                    .then((res:any) => {
                        /* Mensaje de registro exitoso */
                        swal.fire({
                            html: 'Usuario <b>' + nomUsr + ' ' + apUsr +
                                '</b> registrado con éxito.',
                            icon: 'success',
                            showConfirmButton: false,
                            showCloseButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            // toast: true,
                            didOpen: () => {
                                const b = swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {}, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            },
                        }).then((result) => {
                            if (result.dismiss === swal.DismissReason.timer) {
                                /* Redirección al Login */
                                router.push('/');

                                /* Mensaje con las credenciales del usuario registrado */
                                swal.fire({
                                    html: '<center></br>Usuario: <b>' + email +
                                          '</b></br>Contraseña: <b>' + genPswd.value +
                                          '</b></center></br></br>Guarde esta contraseña en</br>un lugar seguro o consulte su correo',
                                    icon: 'info',
                                    showConfirmButton: true,
                                    showCloseButton: false,
                                    width:680,
                                });
                            }
                        });
                    })
                    .catch((e:any) => {
                        if(e.response){
                            /* Mensaje de registro fallido */
                            swal.fire({
                                html: 'El correo <b>' + email + '</b> ya está registrado',
                                icon: 'error',
                                showConfirmButton: false,
                                showCloseButton: false,  
                                timer: 5000,
                                timerProgressBar: true,
                                // position: 'top-end'
                            });
                        }
                        else if(e.request){
                        }
                        else{
                        }});
        },

        updateMed( _id:string, formData:FormData){
            apiAxios({
                url: `http://localhost:5000/updateMed/${String(this.IdMed)}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + this.token,
                },
                data: formData
            })
            .then((res: any) => {             
                this.Foto = res.data.medico.foto
                swal.fire({
                    title: 'Datos del perfil actualizados correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    timer: 2000,
                    timerProgressBar: true
                })
            })
            .catch((e: any) => {
            });
        },

        logout(){
            apiAxios.post("http://localhost:5000/logout")
                    .then(() => {
                        /* Mensaje de cierre de sesión */
                        // Falta uso de botones de cancelar y finaluizar
                        swal.fire({
                            html: 'Esta a punto de cerrar sesión',
                            icon: 'warning',
                            showConfirmButton: true,
                            showCancelButton: true,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.token = null;
                                this.expiresIn = null;
                                window.location.href="/"
                            }
                        })
                    })
        },
    }
});
