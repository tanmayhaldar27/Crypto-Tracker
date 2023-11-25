
import React,{useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import {convertObject} from "../functions/convertObject"
import List from "../components/Dashboard/List"
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import Coin from "../components/Coin";
import { coinsData } from "../functions/coinsData";
import { coinPrices } from "../functions/coinPrices";
import LineChart from "../components/Coin/LineChart";
import {convertDate} from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../components/Coin/PriceType";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [coinData , setCoinData] = useState([]);
  const [days, setDays] = useState(30);
  const [chartData , setChartData] = useState({});
  const [priceType, setPriceType] = React.useState('prices');


  useEffect(() => {
      if(id){
        getData();
      }
    }, [id])

    async function getData(){
      const myData = await coinsData(id);
      if(myData){
        convertObject (setCoinData , myData);
        const prices = await coinPrices(id, days, priceType);
        if(prices.length > 0){
          settingChartData(setChartData , prices);
           setLoading(false);
          }
        }
      }


      const handleDaysChange = async  (event) => {
        setLoading(true);
        setDays(event.target.value);
        const prices = await coinPrices(id, event.target.value, priceType);
        if(prices.length > 0){
           settingChartData(setChartData , prices);
           setLoading(false);
          }
      };

      const handlePriceTypeChange = async (event,newType) => {
        setLoading(true);
        setPriceType(newType);
        const prices = await coinPrices(id,days, event.target.value, newType);
        if(prices.length > 0){
           settingChartData(setChartData , prices);
           setLoading(false);
          }
      };

  return(
    <div>
      <Header />
      {
        loading ? <Loader /> : 
        <>
        <div className="coinData">
          <List coin={coinData} />
          <div>
            <div className="wrapesDaysPrices">
             <div className="pageDaysPrices">
                <SelectDays handleDaysChange={handleDaysChange}  days={days}/>
                <div style={{marginBottom:"1.5rem"}}> 
                <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                 </div>
             </div>
              </div>
             <LineChart chartData={chartData} priceType={priceType} />
          </div>
        <Coin heading={coinData.name} desc={coinData.desc}/>
        </div>
        </>
      }
    </div>
  )
};

export default CoinPage;
