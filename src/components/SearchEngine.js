import React, { useState } from 'react';
import Error from './Error';


const SearchEngine = ({setSearchCategory}) => {

    //state
    const [ category, setCategory ] = useState('');
    const [ error, setError ] = useState(false);

    //query API on form submit
    const handleSubmit = e => {
        e.preventDefault();

        //validation
        if( category === '' ) {
            setError(true);
            return;
        }

        //send data to main component
        setError(false);
        setSearchCategory(category);
    }

    return (  
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder="Search for an image, ex: Coffee, Design, ..."
                        onChange={ e => setCategory(e.target.value) }
                    />

                </div>

                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-danger btn-lg btn-block"
                        value="Search"
                    />
                </div>
            </div>

            { error ? <Error message="Type a category to search by!" /> : null }
        </form>
    );
}
 
export default SearchEngine;