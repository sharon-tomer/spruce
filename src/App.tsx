import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import SearchBar from './components/searchbar/SearchBar';
import ResultsTab from './components/resultsTab/ResultsTab';
import { SearchResult, SearchError } from './types';
import { searchApi } from './helpers/api';

class App extends Component <{}, {results: SearchResult[]|SearchError}> {
  constructor(props: any) {
    super(props);
    this.state = {
      results: []
    }
  }
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Main}>
          <img src={logo} className={styles.logo} alt="logo" />
          <SearchBar onSubmit={this.search.bind(this)}/>
          <ResultsTab results={this.state.results}/>
        </div>
      </div>
    );
  }

  search(text: string): void {
    searchApi(text)
    .then((results) => {
      if (!results.length) {
        this.onNoResults();
      }
      else {
        this.setState({results});
      }
    });
  }

  onSearchFailed (err: string) {
    console.log('Error fetching data from api: ', err);
    // todo
  }

  onNoResults() {
    // todo
  }
}

export default App;
