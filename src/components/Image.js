import React from 'react';

const Image = ({image}) => {

    const { largeImageURL, likes, previewURL, tags, views  } = image;
    const tags_alone = tags.split(',');

    return (  
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <p className="card-text text-light"> {likes} Likes </p>
                    <p className="card-text text-light"> {views} Views </p>
                    <p className="card-text" >
                        { tags_alone.map(tag => (
                            <span className="badge badge-light mx-1"> {tag} </span>
                        )) }
                    </p>
                </div>

                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary btn-block">See Image</a>
                </div>
            </div>
        </div>
    );
}
 
export default Image;