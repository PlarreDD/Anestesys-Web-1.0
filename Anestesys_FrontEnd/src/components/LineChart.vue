<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData"/>
</template>

<script lang="ts">
import { Line } from 'vue-chartjs';
import { Chart as ChartJS,  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
    name: 'LineChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [
                    {
                        label: 'FC',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: [40, 20, 12],
                        fill: false,
                        pointStyle: 'rect', // Estilo del punto en los datos
                    },
                    {
                        label: 'SpO2',
                        borderColor: 'rgba(192, 75, 192, 1)',
                        data: [15, 30, 25],
                        fill: false,
                        pointStyle: 'triangle'
                    }
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    },    
}
</script>