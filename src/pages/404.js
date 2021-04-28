import React from 'react';

const IndexPage = ({pathname}) => {
    const name = pathname;
    return(
        <div>
            <h2>Index Page</h2>
            <p>{name}</p>
        </div>
    )
}



export default IndexPage;
