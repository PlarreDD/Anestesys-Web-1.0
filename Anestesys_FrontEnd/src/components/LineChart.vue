<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" ref="chartRef" />
</template>

<script lang="ts">
import { Line } from 'vue-chartjs';
import { Chart as ChartJS,  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import html2canvas from 'html2canvas';

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
                        // borderDash: [5, 5], // Estilo de línea de puntos y guiones
                        pointStyle: 'rect', // Estilo del punto en los datos
                        // pointRadius: 8
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
    methods: {
        async generateImage() {
            const chartRef = this.$refs.chartRef as HTMLCanvasElement;
            const canvas = await html2canvas(chartRef);
            const imageData = canvas.toDataURL('image/png');
            return imageData;
        },
    },
}
</script>