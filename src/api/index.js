import Axios, { api_key } from "../utils";

export const getCurrencies = async () => {
  const { data } = await Axios(
    "get",
    `live_currencies_list?api_key=${api_key}`
  );

  return Object.keys(data.available_currencies);
};

export const getLiveRate = async (currencies) => {
  const { data } = await Axios(
    "get",
    `live?currency=${currencies}&api_key=${api_key}`
  );
  return data;
};

export const getTimeseries = async (currencies, date) => {
  const { data } = await Axios(
    "get",
    `timeseries?currency=${currencies}&api_key=${api_key}&start_date=${new Date(
      date
    ).toISOString()}&end_date=${new Date().toISOString()}&format=records`
  );

  return data;
};
