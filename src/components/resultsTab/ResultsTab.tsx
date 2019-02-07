import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './ResultsTab.module.css';
import Result from '../result/Result';
import { SearchResult, SearchError } from '../../types';

//todo: pagination
class ResultsTab extends Component <{ results: SearchResult[]|SearchError }, {}> {
  render() {
    let { results } = this.props;
    return (
        <div className={styles.results}>
            {this.buildResults(results)} 
        </div>
    );
  }

  buildResults(results?: any): Result[]|string {
    if(results['err']) return `Error occurred while fetching the gifs: ${results['err']}`;
    return results.map((result: SearchResult) => {
      let { images: { preview_gif: { url } }, id } = result;
      return <Result src={url} key={`result_${id}`}/>
    });
  }
}

export default ResultsTab;
