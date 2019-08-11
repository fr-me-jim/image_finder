import React, { useState, useEffect } from 'react';
import SearchEngine from './components/SearchEngine';
import ImagesList from './components/ImagesList';

function App() {

  //state
  const [ searchCategory, setSearchCategory ] = useState('');
  const [ images, setImages ] = useState([]);

  useEffect(() => {

    const queryAPI = async () => {
      if (searchCategory === '') return;

      const imagesPerPage = 30;
      const apiKey = '13284621-c7f2fa9f139bf64658cdc5171';

      const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchCategory}&per_page=${imagesPerPage}`;

      const response = await fetch(url);
      const result = await response.json();
      
      setImages(result.hits);
          
    };

    queryAPI();

  });

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image finder</p>

        <SearchEngine 
          setSearchCategory={setSearchCategory}
        />
      </div>

      <div className="row justify-content-center">
        <ImagesList 
          images={images}
        />
      </div>
    </div>
  );
}

export default App;
