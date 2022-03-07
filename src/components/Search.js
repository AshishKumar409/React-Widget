import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log('runs on every render');

  // useEffect(()=>{
  //  console.log('runs only once')
  // },[])

  useEffect(() => {
    console.log('runs initially and every time the component is rerendered');
  });

  // useEffect(()=>{
  //   console.log('runs initially and every time the term is changed from its initial state')
  //  },[term])

  return (
    <React.Fragment>
      <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            value={term}
            onChange={(e) => {
              console.log(e.target.value);
              setTerm(e.target.value);
            }}
            placeholder="Search..."
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </React.Fragment>
  );
};

export default Search;
