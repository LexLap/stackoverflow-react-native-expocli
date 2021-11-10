import React, { createContext, useState } from 'react';

export const SearchResultContext = createContext();

const SearchResultContextProvider = (props) => {

    const [ searchResult, setResultData ] = useState(null)
    
    return (
        <SearchResultContext.Provider value={{ searchResult, setResultData }}>
            {props.children }
        </SearchResultContext.Provider>
    );
};

export default SearchResultContextProvider;