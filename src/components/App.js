import React from 'react';
import './App.css';
import Main from '../containers/main';
import CurrencyList from '../containers/currency-list';
import AddCurrency from '../containers/add-currency';

const App = () => (
    <div>
        <Main />
        <CurrencyList />
        <AddCurrency />
    </div>
);

export default App;