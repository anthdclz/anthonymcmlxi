import React from 'react';

const SimpleLink = ({url}) => {
    console.log(url);
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    );
};
export default SimpleLink;