import React from 'react'
import CardCoin from '../components/CardCoin'
import FilterInput from '../components/FilterInput'
import LimitSelector from '../components/LimitSelector'
import SortBy from '../components/SortBy'
import Spinner from '../components/Spinner'


const HomePage = ({
    coins,
    filter,
    setFilter,
    limit,
    setLimit,
    sortBy,
    setSortBy,
    loading,
    error,
}) => {

    const filteredCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
    })
    .slice() // it helps to fetch the in between data in a new array
    .sort ((a, b) => {
        switch (sortBy) {
          case 'market_cap_desc':
            return a.market_cap - b.market_cap;
          case 'market_cap_asc':
            return b.market_cap - a.market_cap;
          case 'price_desc':
            return a.market_cap - b.market_cap;
          case 'price_asc':
            return b.market_cap - a.market_cap;
          case 'change_desc':
            return a.price_change_percentage_24h - b.price_change_percentage_24h;
          case 'change_asc':
            return b.price_change_percentage_24h - a.price_change_percentage_24h; 
        }
    })


  return (
   <div>
      <h1>🚀Crypto Dash</h1>
      {loading && <Spinner color='white'/>}
      {error && <div className="error">{error}</div>}

      <div className="top-controls">
      <FilterInput value={filter} onFilterChange={setFilter}/>   
      <LimitSelector limit={limit} onLimitChange={setLimit}/>
      <SortBy value={sortBy} onSortChange={setSortBy}/>
      </div>

      {!loading && !error && (
        <main className="grid">
          {filteredCoins.length > 0 ? filteredCoins.map((coin) => (
            <CardCoin key={coin.id} coin={coin}/>
          )) : <p>No Matching Coins</p>}
        </main>
      )}
    </div>
  )
}

export default HomePage
