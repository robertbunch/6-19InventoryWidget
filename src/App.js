import React from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <FilterableProductTable />
      </div>
    </div>
  );
}

export default App;
