import React from 'react';

const Error = ({message}) => (  
    <p className="my-3 p-4 text-center alert alert-danger">
        {message}
    </p>
);
 
export default Error;
