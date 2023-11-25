import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { coinsData } from "../functions/coinsData";
import { convertObject } from "../functions/convertObject";
import { coinPrices } from "../functions/coinPrices";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import Coin from "../components/Coin";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart";
import PriceType from "../components/Coin/PriceType";

const Compare = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(false);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const handleDaysChange = async (e) => {
    setDays(e.target.value);
    const prices1 = await coinPrices(crypto1, e.target.value, priceType);
    const prices2 = await coinPrices(crypto2, e.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  const handlePriceTypeChange = async (event, newType) => {
    setLoading(true);
    setPriceType(newType);
    const prices1 = await coinPrices(crypto1, days, newType);
    const prices2 = await coinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    const data1 = await coinsData(crypto1);
    const data2 = await coinsData(crypto2);

    if (data1) {
      convertObject(setCrypto1Data, data1);
    }
    if (data2) {
      convertObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await coinPrices(crypto1, days, priceType);
      const prices2 = await coinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
      setLoading(false);
    }
  }

  const handleCoinChange = async (e, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      setCrypto2(e.target.value);
      const myData = await coinsData(e.target.value);
      convertObject(setCrypto2Data, myData);
      const prices1 = await coinPrices(crypto1, days, priceType);
      const prices2 = await coinPrices(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        console.log("Both the coins", prices1, prices2);
        setLoading(false);
      }
    } else {
      setCrypto1(e.target.value);
      const myData = await coinsData(e.target.value);
      convertObject(setCrypto1Data, myData);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="compare-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="coinData compareList">
            <List coin={crypto1Data} />
          </div>
          <div className="coinData compareList">
            <List coin={crypto2Data} />
          </div>
          <div className="lineChartCompare">
            <div style={{ marginBottom: "1.5rem" , display:"flex" , alignItems:"center",justifyContent:"center" }}>
              <PriceType
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />
            </div>
            {Object.keys(chartData).length > 0 ? (
              <LineChart
                chartData={chartData}
                priceType={priceType}
                multiAxis={true}
              />
            ) : (
              <div>No chart data available</div>
            )}
          </div>
          <div className="coinDescCompare">
            <Coin heading={crypto1Data.name} desc={crypto1Data.desc} />
            <Coin heading={crypto2Data.name} desc={crypto2Data.desc} />
          </div>
        </>
      )}
    </div>
  );
};
export default Compare;
