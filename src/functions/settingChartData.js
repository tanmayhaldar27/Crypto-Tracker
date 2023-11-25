import { convertDate } from "./convertDate"


export const settingChartData = (setChartData , prices1 , prices2) =>{
  if(prices2){
    setChartData({
      labels:prices1.map((price)=>convertDate(price[0])),
      datasets:[
        {
          label:"Crypto1",
          data:prices1.map((price)=>price[1]),
          borderColor:"#ff5400",
          backgroundColor:"rgba(58,128,233,0.1)",
          pointRadius:0,
          borderWidth:2,
          fill:false,
          tension:0.25,
          yAxisID:"crypto1",
        },
        {
          label:"Crypto2",
          data:prices2.map((price)=>price[1]),
          borderColor:"#07f49e",
          backgroundColor:"rgba(58,128,233,0.1)",
          pointRadius:0,
          borderWidth:2,
          fill:false,
          tension:0.25,
          yAxisID:"crypto2",
        }
      ]

    })
  }
  else {
    setChartData({
        labels:prices1.map((price)=>convertDate(price[0])),
        datasets:[
          {
            data:prices1.map((price)=>price[1]),
            borderColor:"#ff5400",
            backgroundColor:"rgba(255, 84, 0,0.1)",
            pointRadius:0,
            borderWidth:2,
            fill:true,
            tension:0.25,
            yAxisID:"crypto1",
          }
        ]

      })
  }
}