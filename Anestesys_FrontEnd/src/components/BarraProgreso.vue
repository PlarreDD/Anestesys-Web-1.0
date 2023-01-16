<template>
    <h3 class="text-center">{{porcentaje}}</h3>
    <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" 
    role="progressbar" 
    :aria-valuenow="porcentaje"
    aria-valuemin="0"
    aria-valuemax="100"
    :style="`width: ${porcentaje}%`"></div>            
    </div>
</template>

<script lang="ts">
export default {
    props: {
        porcentaje: Number
    }
}
</script>