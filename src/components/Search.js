import React, { useState } from 'react';

const Search = props => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value);
  };

  const resetSearchInput = () => {
    setSearchValue('');
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetSearchInput();
  };

  return (
    <div>
      <form className="search">
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <input type="submit" onClick={callSearchFunction} value="SEARCH" />
      </form>
    </div>
  );
};

export default Search;
