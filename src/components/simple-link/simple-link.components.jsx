import React from 'react';

const SimpleLink = ({url, name, ...otherProps}) => {
    const displayName = name ? name : url;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" {...otherProps}>{displayName}</a>
    );
};
export default SimpleLink;