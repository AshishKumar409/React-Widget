import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  console.log('runs on every render');

  // useEffect(()=>{
  //  console.log('runs only once')
  // },[])

  console.log(result)

  // https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params:{
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term,
        }
      });
      setResult(data.query.search)
    };
   if(term){
    search();
   }
    
  }, [term]);

  // useEffect(()=>{
  //   console.log('runs initially and every time the term is changed from its initial state')
  //  },[term])

  return (
    <React.Fragment>
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter your search term here</label>
            <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => {
              // console.log(e.target.value);
              setTerm(e.target.value);
            }}
            placeholder="Search..."
          />
          </div>
        </div>
      </div>
      {/* <div className="ui search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            value={term}
            onChange={(e) => {
              // console.log(e.target.value);
              setTerm(e.target.value);
            }}
            placeholder="Search..."
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div> */}
    </React.Fragment>
  );
};

export default Search;
