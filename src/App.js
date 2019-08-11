import React from 'react';
import SearchEngine from './components/SearchEngine';

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image finder</p>

        <SearchEngine />
      </div>

      <div className="row justify-content-center">

      </div>
    </div>
  );
}

export default App;
