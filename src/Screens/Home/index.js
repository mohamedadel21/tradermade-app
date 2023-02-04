import React, { useEffect, useState, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import DropDown from "../../components/DropDown";
import { getCurrencies, getLiveRate, getTimeseries } from "../../api";
import { LineChart } from "react-native-chart-kit";
import ChartTabs from "../../components/ChartTabs";
import dates from "../../common/dates";

export const Home = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState(null);
  const [currencyTo, setCurrencyTo] = useState(null);
  const [rate, setRate] = useState(0.0);
  const [rateExchange, setRateExchange] = useState("");
  const [timeseries, setTimeseries] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  useEffect(() => {
    fetchCurrencies();
  }, []);
  const fetchCurrencies = async () => {
    const currencies = await getCurrencies();
    if (currencies) {
      setCurrencyFrom(currencies[49]);
      setCurrencyTo(currencies[15]);
      setCurrencies(currencies);
    }
  };

  const fetchTimeseries = async () => {
    if (currencyFrom && currencyTo) {
      const data = await getTimeseries(
        currencyFrom + currencyTo,
        selectedDate.date
      );
      let  quotesLength= data?.quotes?.length
      
      setRateExchange(((parseFloat(data?.quotes[0]?.open)-parseFloat(data?.quotes[quotesLength-1].open))/parseFloat(data?.quotes[quotesLength-1].open)).toFixed(2)+"%")
      
      const timeseries = {
        labels: data?.quotes?.map((item) => ""),
        datasets: [
          {
            data: data?.quotes?.map((item) => item?.high),
          },
        ],
      };
      setTimeseries(timeseries);
    }
  };

  const fetchRate = async () => {
    if (currencyFrom && currencyTo) {
      const rate = await getLiveRate(currencyFrom + currencyTo);
      setRate(rate.quotes[0]);
    }
  };

  const onSelectCurrencyFrom = (item) => setCurrencyFrom(item);
  const onSelectCurrencyTo = (item) => setCurrencyTo(item);

  const calculation = useMemo(() => {
    fetchRate();
    fetchTimeseries();
  }, [currencyFrom, currencyTo, selectedDate]);

  const onSelectedDate = (item) => {
    setSelectedDate(item);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Forex Exchange"
        description="Check out the current price for a currency pair"
      />

      <View style={styles.calculateCurrencyContent}>
        <View style={styles.modalsContent}>
          <DropDown
            label={currencyFrom}
            data={currencies}
            onSelect={onSelectCurrencyFrom}
          />
          <DropDown
            label={currencyTo}
            data={currencies}
            onSelect={onSelectCurrencyTo}
          />
        </View>
        {calculation}

        <Text style={styles.resultText}>
          {rate
            ? `${parseFloat(rate?.bid).toFixed(2)} ${rate?.quote_currency}`
            : ""}
        </Text>
        <Text style={styles.resultTextPercent}>{rateExchange}</Text>
      </View>
      <View style={styles.chartContent}>
        <Text style={styles.chartHeader}>
          {rate ? `${currencyFrom}/${currencyTo}` : ""}
        </Text>

        {timeseries ? (
          <>
            <ScrollView>
              <LineChart
                data={timeseries}
                width={1000}
                height={220}
                yAxisInterval={1}
                chartConfig={styles.chartConfig}
                bezier
                style={styles.chartStyle}
              />
            </ScrollView>
            <ChartTabs
              selectedItem={selectedDate}
              onSelect={(item) => onSelectedDate(item)}
            />
          </>
        ) : null}
      </View>
    </View>
  );
};
