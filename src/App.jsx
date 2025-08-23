import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import CoinDetailsPage from "./pages/CoinDetailsPage";
const API_URL = import.meta.env.VITE_API_URL; // with the help of .env file fetching the data

const App = () => {
  const [coins, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  // Fetching Data
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&parkline=false`
        );
        if (!res.ok) throw new Error("Failed to Fetch Data");
        const data = await res.json();
        // console.log(data);
        setCoin(data);
      } catch (error) {
        setError(error.msg);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [limit]); //whenever the limit changes the useEffect Func will run

 return (
    <>
      <Header/>
      <Routes>
        <Route
          path={"/"}
          element={
            <HomePage
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        ></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/coin/:id" element={<CoinDetailsPage/>}></Route>
        <Route path="*" element={<NotFoundPage/>}></Route> 
      </Routes>
    </>
  );
};

export default App;




// import CardCoin from "./components/CardCoin";
// import LimitSelector from "./components/LimitSelector";
// import FilterInput from "./components/FilterInput";
// import SortBy from "./components/SortBy";
// import React from "react";

  // const filteredCoins = coins
  //   .filter((coin) => {
  //     return (
  //       coin.name.toLowerCase().includes(filter.toLowerCase()) ||
  //       coin.symbol.toLowerCase().includes(filter.toLowerCase())
  //     );
  //   })
  //   .slice() // it helps to fetch the in between data in a new array
  //   .sort((a, b) => {
  //     switch (sortBy) {
  //       case "market_cap_desc":
  //         return a.market_cap - b.market_cap;
  //       case "market_cap_asc":
  //         return b.market_cap - a.market_cap;
  //       case "price_desc":
  //         return a.market_cap - b.market_cap;
  //       case "price_asc":
  //         return b.market_cap - a.market_cap;
  //       case "change_desc":
  //         return a.price_change_percentage_24h - b.price_change_percentage_24h;
  //       case "change_asc":
  //         return b.price_change_percentage_24h - a.price_change_percentage_24h;
  //     }
  //   });

  //[without async & await] how to fetch the API
  // fetch(API_URL)
  // .then((res) => {
  //     if (!res.ok) throw new Error ('Failed to Fetch Data');
  //     return res.json();
  // })
  // .then((data) => {
  //   console.log(data);
  //   setCoin(data);
  //   setLoading(false);
  // })
  // .catch((error) => {
  //   setError(error.message);
  //   setLoading(false);
  // })