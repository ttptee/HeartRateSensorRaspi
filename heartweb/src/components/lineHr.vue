<template>
    <LineChart :chartData="datacollection" :options="chartOptions"></LineChart>
</template>

<script>
import LineChart from './lineChart.js'
export default {
  
    components: {
        LineChart,
        
    },
    data(){
        return{
            datacollection: null,
        chartOptions: null,
        DataHr:[],
        }
    },
     mounted () {
         this.fillData()
     },
     methods:{
         fillData () {
        this.datacollection = {
        //   labels: ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'],
          datasets: [

            {
              label: 'Plan',
              backgroundColor: 'rgba(255, 122, 122, 1)',
              fill:false,
              data: this.DataHr,
              datalabels: {
              display:false,                
            },
            }, 
          ],      
        },
        this.chartOptions ={
          plugins: {
          datalabels: {
            color: "black",
            textAlign: "center",
            font: {
              weight: "bold",
              size: 12,
            },
          }
        },
            responsive: true,
          legend: {
            position: "top"
          },
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Time"
                },
                gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
              }
            ],
                yAxes: [{
                        
                        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: "left",
                        id: "y-axis-1",
                        scaleLabel:{
                          display:true,
                          labelString: "Production (unit)"
                        },
                         gridLines: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                        ticks: {
                  beginAtZero: true,
                  stepSize: 10,
                  min:0,
                  max: 30,
                                  
                }
                    },],
          }
    }
    this.loadcheck=true
      },
     
    
     }
}
</script>