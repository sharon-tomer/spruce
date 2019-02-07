import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import { SearchProps } from '../../types';
class SearchBar extends Component<{onSubmit: SearchProps}, {searchTerm: string}> {

    constructor(props: {onSubmit: SearchProps}){
        super(props);
        this.state = {searchTerm: ''};
    }

    handleSubmit(event: any) {
        this.props.onSubmit(this.state.searchTerm);
        event.preventDefault();
    }

    handleChange(event: any) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <div>
                <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Gif search:
                    </label>
                    <input className={styles.input} type="text" name="searchbar" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}  />
                    <input className={styles.submit} type="submit" value="Find it!" />
                </form>
            </div>
        );
    }
}

export default SearchBar;
