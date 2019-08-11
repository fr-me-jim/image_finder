import React, { useState, useEffect } from 'react';
import SearchEngine from './components/SearchEngine';
import ImagesList from './components/ImagesList';

function App() {

  //state
  const [ searchCategory, setSearchCategory ] = useState('');
  const [ images, setImages ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);


  useEffect(() => {

    const queryAPI = async () => {
      if (searchCategory === '') return;

      const imagesPerPage = 30;
      const apiKey = '13284621-c7f2fa9f139bf64658cdc5171';

      const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchCategory}&per_page=${imagesPerPage}`;

      const response = await fetch(url);
      const result = await response.json();
      
      setImages(result.hits);

      //calculate total pages
      const total = Math.ceil( response.totalHits / imagesPerPage );
      setTotalPages(total);

          
    };

    queryAPI();

  });

  const handleClick = name => {
    if ( name === 'previous' )  
      previousPage();

    else if ( name === 'next' )
      nextPage();

    else return;
  }

  const previousPage = () => {
    let newPage = currentPage - 1;

    //store in state
    setCurrentPage(newPage);
  }

  const nextPage = () => {
    let newPage = currentPage + 1;

    //store in state
    setCurrentPage(newPage);
  }

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

        {/* check wheather the buttons are useless or not */}
        { ( currentPage === 1 || totalPages === 1 ) ? null :
          <button  
            name="previous" onClick={e => handleClick(e.target.name)} className="btn btn-light mr-2 mb-2"
          >&laquo; Previous</button>
        }
        { ( currentPage === totalPages || totalPages === 1 ) ? null :
          <button 
            name="next" onClick={e => handleClick(e.target.name)} className="btn btn-light mr-2 mb-2"
          >Next &raquo;</button>
        }
        
      </div>
    </div>
  );
}

export default App;
